"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [location, setLocation] = useState('')
  const router = useRouter()
  
  const navigateToSearch = () =>{
    if(!location) return
    router.push(`/search?city=${location.trim()}`)
    setLocation("")
  }

  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <span>
        <input
          className="rounded text-lg mr-3 w-[450px] p-2 "
          type="text"
          placeholder="State, city or town"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </span>
      <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={navigateToSearch}>
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
