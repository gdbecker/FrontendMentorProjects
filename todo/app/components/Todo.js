import React from 'react';
import Image from 'next/image';
import IconCheckLight from '../../public/icon-check-light.svg';
import IconCheckDark from '../../public/icon-check-dark.svg';
import IconCross from '../../public/icon-cross.svg';

function Todo({ darkMode, id, todo, isChecked, listIndex, index, dragStart, dragEnter, drop, checkHandler, deleteTodo }) {

  return (
    <div 
      key={listIndex} 
      className="flex flex-row w-full rounded-tl-md rounded-tr-md justify-between p-5 items-center bg-lightTheme-100 dark:bg-darkTheme-200 border-b-[1px] border-lightTheme-300 dark:border-darkTheme-600 group"
      onDragStart={(e) => dragStart(e, listIndex, id)}
      onDragEnter={(e) => dragEnter(e, listIndex, id)}
      onDragEnd={drop}
      draggable
    >
      <div className="flex flex-row">
        <button 
          className={"flex p-0.5 rounded-full ring-1 group-hover:ring-lightTheme-100 group-hover:bg-gradient-to-br group-hover:from-checkBgFrom group-hover:to-checkBgTo dark:group-hover:ring-darkTheme-200 group " + (isChecked ? "ring-lightTheme-100 dark:ring-darkTheme-600 bg-gradient-to-br from-checkBgFrom to-checkBgTo" : "ring-lightTheme-300 dark:ring-darkTheme-300 dark:hover:ring-darkTheme-200")}
          onClick={(event) => checkHandler(event, todo)}>
          <div 
            className="flex px-[0.3rem] py-[0.38rem] rounded-full group-hover:bg-lightTheme-100 dark:group-hover:bg-darkTheme-200"
            id={id}>
            <Image 
              id={id} 
              src={(!isChecked && darkMode ? IconCheckDark : IconCheckLight)} 
              alt="Icon" 
              width={12} 
              height={12} 
              className="" 
            />
          </div>
        </button>
        <button 
          className={"pl-4 " + (isChecked ? "line-through text-lightTheme-300 dark:text-darkTheme-600" : "text-lightTheme-500 dark:text-darkTheme-300")}
          id={id}
          onClick={(event) => checkHandler(event, todo)}
        >{todo}</button>
      </div>
      <button 
        className="flex lg:invisible group-hover:visible"
        onClick={() => deleteTodo(id)}>
        <Image src={IconCross} alt="Icon" width={15} height={15} className="" />
      </button>
    </div>
  )
}

export default Todo;