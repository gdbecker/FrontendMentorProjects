'use client';
import React, { useState, useEffect, useRef } from 'react';
// import LoadingPage from './loading';
import Image from 'next/image';
import Task from './components/Task';
import IconSun from '../public/icon-sun.svg';
import IconMoon from '../public/icon-moon.svg';
import IconCheck from '../public/icon-check.svg';
import IconCross from '../public/icon-cross.svg';

import { collection, addDoc, serverTimestamp, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from './services/firebase.config';

function Home() {
  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = async (e) => {
    setDarkMode(!darkMode);
  }

  // Firebase db variables
  const collectionRef = collection(db, "todo");
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodo] = useState([]);
  const [checked, setChecked] = useState([]);

  // State variables
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  }

  // Add a new Todo
  const submitTodo = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collectionRef, {
        todo: newTodo,
        isChecked: false,
        timestamp: serverTimestamp()
      })
      setNewTodo("");
      window.location.reload();
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
      window.location.reload();
      } catch (err) {
      console.log(err);
    }
  }

  // Edit a Todo
  const updateTodo = async (e) => {
    e.preventDefault()
    try {
      const todoDocument = doc(db, "todo", id);
      await updateDoc(todoDocument, {
        todo: todos
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const onChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
  }

  useEffect(() => {
    const getTodo = async () => {
      await getDocs(collectionRef).then((todo) => {
        let todoData = todo.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setTodo(todoData)
        setChecked(todoData)
        }).catch((err) => {
          console.log(err);
        })
      }
    getTodo();
    setIsLoading(false);
  }, [])

  if (!isLoading) {
    return (
      <main className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-lightTheme-200 font-josefinSansRegular dark:bg-darkTheme-100">
          <div className="flex h-60 items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('../../public/bg-mobile-light.jpg')] md:bg-[url('../../public/bg-desktop-light.jpg')] dark:bg-[url('../../public/bg-mobile-dark.jpg')] dark:md:bg-[url('../../public/bg-desktop-dark.jpg')]">
            <div className="relative w-full md:w-[80%] lg:w-[50%]">
              <div className="absolute flex-col -top-14 px-8 w-full text-center items-center justify-center">
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
  
                <div className="flex flex-col h-fit w-full mb-5 !rounded-md bg-lightTheme-100 dark:bg-darkTheme-200">
  
                  {todos.map(({ id, todo, isChecked}) =>
                    <div key={id} className="flex flex-row w-full rounded-tl-md rounded-tr-md justify-between p-5 items-center bg-lightTheme-100 dark:bg-darkTheme-200 border-b-[1px] border-lightTheme-300 dark:border-darkTheme-600 group" draggable>
                      <div className="flex flex-row">
                        <button 
                          className="flex p-0.5 rounded-full ring-1 ring-lightTheme-300 hover:ring-lightTheme-100 hover:bg-gradient-to-br from-checkBgFrom to-checkBgTo group dark:ring-darkTheme-600 dark:hover:ring-darkTheme-200">
                          <div className="flex h-5 w-5 rounded-full group-hover:bg-lightTheme-100 dark:group-hover:bg-darkTheme-200"></div>
                        </button>
                        <button className="pl-4 text-lightTheme-500 dark:text-darkTheme-300">{todo}</button>
                      </div>
                      <button 
                        className="flex lg:invisible group-hover:visible"
                        onClick={() => deleteTodo(id)}>
                        <Image src={IconCross} alt="Icon" width={15} height={15} className="" />
                      </button>
                    </div>
                  )}
                
  
                  <div className="flex flex-row w-full justify-between p-5 items-center border-b-[1px] border-lightTheme-300 dark:border-darkTheme-600 group">
                    <div className="flex flex-row">
                      <button 
                        className="flex p-0.5 rounded-full bg-gradient-to-br from-checkBgFrom to-checkBgTo">
                        <div className="flex px-[0.3rem] py-[0.38rem] rounded-full hover:bg-lightTheme-100 dark:hover:bg-darkTheme-200">
                          <Image src={IconCheck} alt="Icon" width={12} height={12} className="" />
                        </div>
                      </button>
                      <button className="pl-4 text-lightTheme-300 line-through dark:text-darkTheme-600">Example task</button>
                    </div>
                    <button 
                      className="flex lg:invisible group-hover:visible">
                      <Image src={IconCross} alt="Icon" width={15} height={15} className="" />
                    </button>
                  </div>
  
                  <div className="flex flex-row w-full justify-between p-5 items-center">
                    <h1 className="text-lightTheme-400 text-sm dark:text-darkTheme-600">5 Items Left</h1>
  
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
  
                    <button className="px-2 text-lightTheme-400 text-sm hover:text-lightTheme-500 dark:text-darkTheme-600 dark:hover:text-darkTheme-400">Clear Completed</button>
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
  
                
                
                {/* Map out all tasks from db */}
                {/* <Task /> */}
  
              </div>
            </div>
            
          </div>
          
        </div>
      </main>
    )
  }
  
}

export default Home;
