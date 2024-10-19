'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Todo from './components/Todo';
import IconSun from '../public/icon-sun.svg';
import IconMoon from '../public/icon-moon.svg';

import { collection, addDoc, serverTimestamp, getDocs, doc, deleteDoc, runTransaction, orderBy, query } from 'firebase/firestore';
import { db } from './services/firebase.config';

function Home() {
  // Dark mode functionality
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = async (e) => {
    setDarkMode(!darkMode);
  }

  // Firebase db variables
  const collectionRef = collection(db, "todo");
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodo] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [checked, setChecked] = useState([]);
  const [highestListIndex, setHighestListIndex] = useState('');

  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [itemsLeft, setItemsLeft] = useState('');

  // Get the highest list index value from the Todos list, for assigning next value for a new Todo
  const getHighestListIndex = () => {
    var indices = []
    for (var i = 0; i < todos.length; i++) {
      indices.push(todos[i]["listIndex"])
    }

    if (indices.length > 0) {
      return Math.max.apply(Math, indices);
    } else {
      return -1;
    }
  }

  // Get all Todos
  const getTodo = async () => {
    await getDocs(collectionRef).then((todo) => {
      let todoData = todo.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      todoData.sort(function(first, second) {
        return first.listIndex - second.listIndex;
      });
      setTodo(todoData)
      setFilteredTodos(todoData)
      setChecked(todoData)
      countItemsLeft(todoData)
    }).catch((err) => {
      console.log(err);
    })
  }

  // Add a new Todo
  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  }

  const submitTodo = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collectionRef, {
        todo: newTodo,
        isChecked: false,
        listIndex: getHighestListIndex(todos) + 1,
        timestamp: serverTimestamp()
      })
      setNewTodo("");
      getTodo();
    } catch (err) {
      console.log(err);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitTodo(e);
    }
  }

  // Delete a Todo
  const deleteTodo = async (id) => {
    try {
      // window.confirm("Are you sure you want to delete this Todo?")
      const documentRef = doc(db, "todo", id);
      await deleteDoc(documentRef)
      getTodo();
      } catch (err) {
      console.log(err);
    }
  }

  const clearCompletedBtn = () => {
    var closedTodos =  todos.filter(function(t) {
      return t.isChecked == true;
    });

    closedTodos.map(function(t) {
      deleteTodo(t.id);
    })
  }

  // Edit Todo completion
  const checkHandler = async (event, todo) => {

    console.log(checked)

    setChecked(state => {
      const indexToUpdate = state.findIndex(checkBox => checkBox.id.toString() === event.target.id);
      let newState = state.slice()

      newState.splice(indexToUpdate, 1, {
        ...state[indexToUpdate],
        isChecked: !state[indexToUpdate].isChecked,

      })
      setTodo(newState)
      countItemsLeft(newState)
      filterDownTodos(filter, newState)
      return newState
    });

    // Send the completed status to db
    try {
      const docRef = doc(db, "todo", event.target.id);
      await runTransaction(db, async (transaction) => {
        const todoDoc = await transaction.get(docRef);
        if (!todoDoc.exists()) {
          throw "Document does not exist!";
        }
        const newValue = !todoDoc.data().isChecked;
        transaction.update(docRef, { isChecked: newValue });
      });
      console.log("Transaction successfully committed!");
    } catch (error) {
      console.log("Transaction failed: ", error);
    }

  };

  // Filtering Todos
  const onChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
    filterDownTodos(e.currentTarget.value, todos);
  }

  const countItemsLeft = (todosList) => {
    var openTodos =  todosList.filter(function(t) {
      return t.isChecked == false;
    });

    setItemsLeft(openTodos.length);
  }

  const filterToActive = (todosList) => {
    var openTodos =  todosList.filter(function(t) {
      return t.isChecked == false;
    });

    setFilteredTodos(openTodos);
  }

  const filterToCompleted = (todosList) => {
    var closedTodos =  todosList.filter(function(t) {
      return t.isChecked == true;
    });

    setFilteredTodos(closedTodos);
  }

  const filterDownTodos = (filter, todoList) => {
    if (filter == "All") {
      setFilteredTodos(todoList);
    } else if (filter == "Active") {
      filterToActive(todoList);
    } else {
      filterToCompleted(todoList);
    }
  }

  // Drag and drop functionality
  const dragItem = useRef();
  const dragItemId = useRef();
  const dragOverItem = useRef();
  const dragOverItemId = useRef();

  const dragStart = (e, position, id) => {
    dragItem.current = position;
    dragItemId.current = id;
  };
 
  const dragEnter = (e, position, id) => {
    dragOverItem.current = position;
    dragOverItemId.current = id;
  };
 
  const drop = async (e) => {
    if (filter == "All") {
      const copyTodos = [...todos];

      let selectedTodo = copyTodos.filter(todo => todo.listIndex === dragItem.current)[0];
      let selectedTodoIndex = copyTodos.indexOf(selectedTodo);

      let overTodo = copyTodos.filter(todo => todo.listIndex === dragOverItem.current)[0];
      let selectedOverTodoIndex = copyTodos.indexOf(overTodo);

      copyTodos[selectedTodoIndex].listIndex = dragOverItem.current;
      copyTodos[selectedOverTodoIndex].listIndex = dragItem.current;

      copyTodos.sort(function(first, second) {
        return first.listIndex - second.listIndex;
      });

      // Update new listIndex values to db (switch em)
      try {
        const docRefDragItem = doc(db, "todo", dragItemId.current);
        await runTransaction(db, async (transaction) => {
          const todoDoc = await transaction.get(docRefDragItem);
          if (!todoDoc.exists()) {
            throw "Document does not exist!";
          }
          transaction.update(docRefDragItem, { listIndex: dragOverItem.current});
        });
      } catch (error) {
        console.log("Transaction failed: ", error);
      }

      try {
        const docRefDragOverItem = doc(db, "todo", dragOverItemId.current);
        await runTransaction(db, async (transaction) => {
          const todoDoc = await transaction.get(docRefDragOverItem);
          if (!todoDoc.exists()) {
            throw "Document does not exist!";
          }
          transaction.update(docRefDragOverItem, { listIndex: dragItem.current});
        });
      } catch (error) {
        console.log("Transaction failed: ", error);
      }

      dragItem.current = null;
      dragOverItem.current = null;
      setTodo(copyTodos);
      setFilteredTodos(copyTodos);
      setChecked(copyTodos);
    }
  };

  // Set up app for viewing
  useEffect(() => {
    getTodo();
    setIsLoading(false);
  }, [])

  if (!isLoading) {
    return (
      <main className={darkMode ? "dark" : ""}>
        <div className="min-h-screen mx-auto bg-lightTheme-200 font-josefinSansRegular pb-10 dark:bg-darkTheme-100">
          <div className="h-72 bg-cover bg-center bg-no-repeat bg-[url('../../public/bg-mobile-light.jpg')] md:bg-[url('../../public/bg-desktop-light.jpg')] dark:bg-[url('../../public/bg-mobile-dark.jpg')] dark:md:bg-[url('../../public/bg-desktop-dark.jpg')]">
          </div>  
          <div className="z-10 w-full mx-auto -mt-52 md:w-[80%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%]">
            <div className="flex-col px-8 w-full text-center items-center justify-center">
              <div className="flex flex-row w-full justify-between">
                <h1 className="text-lightTheme-100 text-3xl font-josefinSansBold tracking-[0.70rem] lg:text-4xl">TODO</h1>
                <button class="flex items-center justify-center" onClick={(e)=> changeTheme(e)}>
                  { darkMode ? 
                    (<Image src={IconSun} alt="Icon" width={25} height={25} className="pb-2" /> ) : 
                    (<Image src={IconMoon} alt="Icon" width={25} height={25} className="pb-2" />) 
                  }
                </button>
              </div>

              <div className="flex h-fit w-full mt-8 mb-5 bg-lightTheme-100 rounded-md dark:bg-darkTheme-200">
                <div className="flex flex-row w-full p-5 items-center">
                  <button 
                    className="flex p-3 rounded-full ring-1 ring-lightTheme-300 dark:ring-darkTheme-600"
                    onClick={e => submitTodo(e)}
                  ></button>
                  <input 
                    className="flex w-full ml-4 bg-lightTheme-100 text-lightTheme-500 focus:outline-none dark:bg-darkTheme-200 dark:text-darkTheme-300" 
                    id="newTask" 
                    type="text" 
                    placeholder="Create a new todo..."
                    value={newTodo}
                    onChange={e => onChangeNewTodo(e)}
                    onKeyDown={handleKeyDown}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mb-5 !rounded-md bg-lightTheme-100 dark:bg-darkTheme-200">
                {filteredTodos.map(({ id, todo, isChecked, listIndex }, index) =>
                  <Todo 
                    darkMode={darkMode}
                    key={listIndex}
                    id={id}
                    todo={todo}
                    isChecked={isChecked}
                    listIndex={listIndex}
                    index={index}
                    dragStart={dragStart}
                    dragEnter={dragEnter}
                    drop={drop}
                    checkHandler={checkHandler}
                    deleteTodo={deleteTodo}
                  />
                )}

                <div className="flex flex-row w-full justify-between p-5 items-center">
                  <h1 className="text-lightTheme-400 text-sm dark:text-darkTheme-600">{itemsLeft} Items Left</h1>

                  <div className="flex flex-row justify-center invisible lg:visible">
                    <button 
                      className={"px-2 font-josefinSansBold text-sm hover:text-lightTheme-500 dark:hover:text-darkTheme-400 " + (filter == "All" ? "text-brightBlue" : "text-lightTheme-400 dark:text-darkTheme-600")}
                      value="All"
                      onClick={e => onChangeFilter(e)}
                    >All</button>
                    <button 
                      className={"px-2 font-josefinSansBold text-sm hover:text-lightTheme-500 dark:hover:text-darkTheme-400 " + (filter == "Active" ? "text-brightBlue" : "text-lightTheme-400 dark:text-darkTheme-600")}
                      value="Active"
                      onClick={e => onChangeFilter(e)}
                    >Active</button>
                    <button 
                      className={"px-2 font-josefinSansBold text-sm hover:text-lightTheme-500 dark:hover:text-darkTheme-400 " + (filter == "Completed" ? "text-brightBlue" : "text-lightTheme-400 dark:text-darkTheme-600")}
                      value="Completed"
                      onClick={e => onChangeFilter(e)}
                    >Completed</button>
                  </div>

                  <button 
                    className="px-2 text-lightTheme-400 text-sm hover:text-lightTheme-500 dark:text-darkTheme-600 dark:hover:text-darkTheme-400"
                    onClick={() => clearCompletedBtn()}
                  >Clear Completed</button>
                </div>
                
              </div>

              <div className="flex flex-row h-fit w-full p-5 bg-lightTheme-100 rounded-md justify-center lg:hidden dark:bg-darkTheme-200">
                <button 
                  className={"px-2 font-josefinSansBold text-sm hover:text-lightTheme-500 dark:hover:text-darkTheme-400 " + (filter == "All" ? "text-brightBlue" : "text-lightTheme-400 dark:text-darkTheme-600")}
                  value="All"
                  onClick={e => onChangeFilter(e)}
                >All</button>
                <button 
                  className={"px-2 font-josefinSansBold text-sm hover:text-lightTheme-500 dark:hover:text-darkTheme-400 " + (filter == "Active" ? "text-brightBlue" : "text-lightTheme-400 dark:text-darkTheme-600")}
                  value="Active"
                  onClick={e => onChangeFilter(e)}
                >Active</button>
                <button 
                  className={"px-2 font-josefinSansBold text-sm hover:text-lightTheme-500 dark:hover:text-darkTheme-400 " + (filter == "Completed" ? "text-brightBlue" : "text-lightTheme-400 dark:text-darkTheme-600")}
                  value="Completed"
                  onClick={e => onChangeFilter(e)}
                >Completed</button>
              </div>

              <div className="flex flex-row w-full justify-center py-10 items-center">
                <p className="text-lightTheme-400 text-sm dark:text-darkTheme-600">Drag and drop to reorder list</p>
              </div>
            </div>
          </div>     
               
        </div>
      </main>
    )
  }
}

export default Home;
