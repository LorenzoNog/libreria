"use client";
import React, { useState } from "react";

const Nav = () => {

  return (
    <div className="flex flex-row justify-between p-8 ml-5 mr-5 items-center border-b-[1px]">
      <h1 className="text-[50px] text-gray-500 font-bold ">📚 Libritos</h1>
      <form className="flex flex-row items-center gap-3">
        <input
          placeholder="Busca tu libro favorito..."
          className="bg-gray-200 w-[300px] p-2 rounded"
          type="text"
        />
      </form>
    </div>
  );
};

export default Nav;
