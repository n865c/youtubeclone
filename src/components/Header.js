import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../utils/sliceStore';
import { setCacheData } from '../utils/cacheSlice';
import { SEARCH_API } from '../utils/constant';
const Header = () => {
    const [search, setSearch] = useState(null);
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const data = useSelector((store) => store.cache);
    console.log(data);
    useEffect(() => {


        const apiSearch = setTimeout(() => {
            if (data[query])
                setSearch(data[query]);
            else {
                searchapi();
            }
        }, 200);
        return () => clearTimeout(apiSearch)
    }, [query])
    const searchapi = async () => {
        const data = await fetch(SEARCH_API+query);
        const res = await data.json();
        console.log(res[1]);
        setSearch(res[1]);
        dispatch(setCacheData({ [query]: res[1] }));
    }

    const menu = () => {
        dispatch(toggleTheme());
    }
    return (
        <div className='grid grid-flow-col w-full shadow-md p-2 border-gray-500 fixed bg-white'>
            <div className='flex col-span-1 gap-2'>
                <img className="w-8 h-10 cursor-pointer" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" onClick={() => {
                    menu()
                }} />
                <img className="w-37 h-12" src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" />
            </div>
            <div className='col-span-10 flex  justify-center'>
                <input type="text" placeholder='search' className='border-2 rounded-l-full border-gray-400 w-1/2 h-10 p-3'
                    value={query} onChange={(e) => {
                        setQuery(e.target.value);

                    }}
                    onFocus={() => setShow(true)}
                    onBlur={() => setShow(false)}

                />
                <div className='w-16 h-10 rounded-r-full border-gray-400 border-2 p-2'>
                    <img className="h-7 w-8" src="https://t3.ftcdn.net/jpg/03/25/73/68/360_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg" />
                </div>
                {show === true ? <div className='fixed flex flex-col w-5/12 mt-10 bg-white rounded-md'>
                    {
                        search?.map((i, index) => {
                            return <div key={index} className=' border-2 border-gray-100 hover:text-white hover:bg-black  hover:cursor-pointer rounded-md  p-2'>
                                {i}
                            </div>

                        })

                    }
                </div> : ""}

            </div>
            <div className='col-span-1'>
                <img className="w-10 h-10" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" />
            </div>
        </div>
    )
}
export default Header
