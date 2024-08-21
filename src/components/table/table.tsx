"use client"

import { useState } from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashAlt } from 'react-icons/fa';
import { getPriorityColor } from '@/helpers/helper';

export default function Table() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='flex flex-col gap-3'>
            <div className='shadow-lg p-3 rounded-lg flex items-center justify-between'>
                <div className='flex gap-3 items-center'>
                    <button className='bg-main_color hover:bg-main_color/85 transition text-white text-[14px] px-3 py-1.5 rounded-[4px] font-semibold'>+ New Project</button>
                    <select className='border w-[148px] px-3 py-1 rounded-[4px] text-sm'>
                        <option selected disabled>Sort by</option>
                        <option>A - Z</option>
                        <option>Date Added</option>
                        <option>Newest</option>
                        <option>Type</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <Image
                        src="https://spruko.com/demo/xintra/dist/assets/images/faces/1.jpg"
                        alt="Descriptive Alt Text"
                        width={25}
                        height={25}
                        className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                    />
                    <Image
                        src="https://spruko.com/demo/xintra/dist/assets/images/faces/2.jpg"
                        alt="Descriptive Alt Text"
                        width={25}
                        height={25}
                        className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                    />
                    <Image
                        src="https://spruko.com/demo/xintra/dist/assets/images/faces/3.jpg"
                        alt="Descriptive Alt Text"
                        width={25}
                        height={25}
                        className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                    />
                    <Image
                        src="https://spruko.com/demo/xintra/dist/assets/images/faces/4.jpg"
                        alt="Descriptive Alt Text"
                        width={25}
                        height={25}
                        className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                    />
                    <Image
                        src="https://spruko.com/demo/xintra/dist/assets/images/faces/5.jpg"
                        alt="Descriptive Alt Text"
                        width={25}
                        height={25}
                        className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                    />
                    <Image
                        src="https://spruko.com/demo/xintra/dist/assets/images/faces/6.jpg"
                        alt="Descriptive Alt Text"
                        width={25}
                        height={25}
                        className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                    />
                    <Image
                        src="https://spruko.com/demo/xintra/dist/assets/images/faces/7.jpg"
                        alt="Descriptive Alt Text"
                        width={25}
                        height={25}
                        className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                    />

                    <div className='rounded-full w-[25px] h-[25px] text-white text-xs flex items-center justify-center cursor-default me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transitio bg-main_color'>+8</div>
                </div>
                <div className='flex items-center gap-2'>
                    <input className='border text-sm py-2 px-3 rounded-md' placeholder='Search Project' />
                    <button className='text-sm bg-gray-50 py-2 px-2'>Search</button>
                </div>
            </div>

            <div>
                <div className="shadow-xl rounded-lg overflow-hidden bg-white">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Project Name</th>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Description</th>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Team</th>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Assigned Date</th>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Due Date</th>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Status</th>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Priority</th>
                                <th className="px-4 py-2 border-b-2 text-left text-[14px] font-normal">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3 border-b flex items-center gap-2">
                                    <div className='bg-[#E6F6FD] w-fit rounded-full p-1'>
                                        <img className='w-[30px]' src='https://spruko.com/demo/xintra/dist/assets/images/company-logos/1.png' />
                                    </div>
                                    <div>
                                        <p className='text-[14px]'>Website Redesign</p>
                                        <span className='text-xs text-[#7184A1]'>Total
                                            <span className='text-black'> 18/22 </span>
                                            tasks completed</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border-b text-[12px] w-[350px] text-[#7184A1]">Build an advanced analytics dashboard integrating real-time data from multiple sources.</td>
                                <td className="px-4 py-3 border-b">
                                    <div className='flex items-center'>
                                        <Image
                                            src="https://spruko.com/demo/xintra/dist/assets/images/faces/1.jpg"
                                            alt="Descriptive Alt Text"
                                            width={25}
                                            height={25}
                                            className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                                        />
                                        <Image
                                            src="https://spruko.com/demo/xintra/dist/assets/images/faces/2.jpg"
                                            alt="Descriptive Alt Text"
                                            width={25}
                                            height={25}
                                            className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                                        />
                                        <Image
                                            src="https://spruko.com/demo/xintra/dist/assets/images/faces/3.jpg"
                                            alt="Descriptive Alt Text"
                                            width={25}
                                            height={25}
                                            className="rounded-full me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition"
                                        />

                                        <div className='rounded-full w-[25px] h-[25px] text-white text-xs flex items-center justify-center cursor-default me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transitio bg-main_color'>+8</div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border-b text-[12px]">15, Jun 2024</td>
                                <td className="px-4 py-3 border-b text-[12px]">30, Aug 2024</td>
                                <td className="px-4 py-3 border-b text-[12px]">
                                    <div className="w-full bg-gray-200 rounded-full h-1">
                                        <div className="bg-blue-600 h-1 rounded-full w-[65%]"></div>
                                    </div>
                                    <div className='text-[13px] flex items-center gap-1'>
                                        <span className='text-main_color'>65%</span>
                                        <span>Completed</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border-b text-[12px]">
                                    <div className={`px-2 py-1 rounded-md text-xs font-semibold w-fit ${getPriorityColor('High')}`}>High</div>
                                </td>
                                <td className="px-4 py-3 border-b">
                                    <button onClick={toggleDropdown} className="bg-gray-100 rounded-sm p-1 text-gray-500">
                                        <BsThreeDotsVertical />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute z-10 bg-white divide-y divide-gray-100 translate-x-[-50px] rounded-md shadow w-32 ">
                                            <ul className="py-2 text-sm text-gray-700">
                                                <li>
                                                    <a href="#" className=" px-4 py-2 hover:bg-main_color/10 hover:text-main_color flex items-center gap-1"><IoEyeOutline />
                                                        View</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex px-4 py-2 hover:bg-main_color/10 hover:text-main_color items-center gap-1"><LuPencilLine />
                                                        Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex px-4 py-2 hover:bg-main_color/10 hover:text-main_color items-center gap-1F"><FaRegTrashAlt />
                                                        Delete</a>
                                                </li>

                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
