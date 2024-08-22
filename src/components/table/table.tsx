"use client";

import { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { getPriorityColor } from "@/helpers/helper";
import { useDeleteProject, useRequest } from "@/http/axiosFetcher";
import { mutate } from "swr";
import CreateProjectForm from "../createForm/createForm";

export default function Table() {
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const toggleDropdown = (projectId: string) => {
        setOpenDropdownId(openDropdownId === projectId ? null : projectId);
    };
    const { trigger: deleteProject, error } = useDeleteProject();

    const handleDelete = async (projectId: string) => {
        try {
            await deleteProject({ dynamicValue: projectId });
            mutate('/projects');
            console.log('deleted');
        } catch (err) {
            console.error(err);
        }
    };

    const { data } = useRequest("user", { method: "GET", module: "devApi" });

    if (error) return <div>Failed to load</div>;
    if (!data) return (<div className="flex items-center justify-center min-h-screen" role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin  fill-main_color" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
    </div>)


    const filteredData = data.filter((project: any) =>
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const sortedData = [...filteredData].sort((a: any, b: any) => {
        if (sortOption === "A - Z") {
            return a.projectName.localeCompare(b.projectName);
        } else if (sortOption === "Date Added") {
            return new Date(b.assignedDate).getTime() - new Date(a.assignedDate).getTime();
        } else if (sortOption === "Newest") {
            return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        } else if (sortOption === "Type") {
            return a.priority.localeCompare(b.priority);
        }
        return 0;
    });




    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="shadow-lg p-3 rounded-lg flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <button
                        onClick={handleOpenForm}
                        className="bg-main_color hover:bg-main_color/85 transition text-white text-[14px] px-3 py-1.5 rounded-[4px] font-semibold"
                    >
                        + New Project
                    </button>
                    <select
                        className="border w-[148px] px-3 py-1 rounded-[4px] text-sm"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option selected disabled>
                            Sort by
                        </option>
                        <option>A - Z</option>
                        <option>Date Added</option>
                        <option>Newest</option>
                        <option>Type</option>
                    </select>
                </div>
                {isFormOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-5 rounded-lg shadow-lg w-[500px]">
                            <CreateProjectForm onClose={handleCloseForm} />
                        </div>
                    </div>
                )}

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
                <div className="flex items-center gap-2">
                    <input
                        className="border text-sm py-2 px-3 rounded-md"
                        placeholder="Search Project"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="text-sm bg-gray-50 py-2 px-2">Search</button>
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
                            {sortedData.map((project: any) => (
                                <tr key={project.id}>
                                    <td className="px-4 py-3 border-b flex items-center gap-2">
                                        <div className="bg-[#E6F6FD] w-fit rounded-full p-1">
                                            <img
                                                className="w-[30px]"
                                                src="https://spruko.com/demo/xintra/dist/assets/images/company-logos/1.png"
                                            />
                                        </div>
                                        <div className="w-[57%]">
                                            <p className="text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                {project.projectName}
                                            </p>
                                            <span className="text-xs text-[#7184A1]">
                                                Total
                                                <span className="text-black">
                                                    {" "}
                                                    {project.completedTask}/{project.totalTask}{" "}
                                                </span>
                                                tasks completed
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border-b text-[12px] w-[350px] text-[#7184A1]">
                                        {project.desc}
                                    </td>
                                    <td className="px-4 py-3 border-b">
                                        <div className="flex items-center">
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
                                            <div className="rounded-full w-[25px] h-[25px] text-white text-xs flex items-center justify-center cursor-default me-[-0.20rem] hover:z-[1] hover:scale-110 hover:border-white transition bg-main_color">
                                                +8
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border-b text-[12px]">{project.assignedDate}</td>
                                    <td className="px-4 py-3 border-b text-[12px]">{project.dueDate}</td>
                                    <td className="px-4 py-3 border-b text-[12px]">
                                        <div className="w-full bg-gray-200 rounded-full h-1">
                                            <div
                                                className="bg-blue-600 h-1 rounded-full"
                                                style={{ width: `${project.status}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-[13px] flex items-center gap-1">
                                            <span className="text-main_color">{project.status}%</span>
                                            <span>Completed</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border-b text-[12px]">
                                        <div
                                            className={`px-2 py-1 rounded-md text-xs font-semibold w-fit ${getPriorityColor(
                                                project.priority
                                            )}`}
                                        >
                                            {project.priority}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border-b">
                                        <button
                                            onClick={() => toggleDropdown(project.id)}
                                            className="bg-gray-100 rounded-sm p-1 text-gray-500"
                                        >
                                            <BsThreeDotsVertical />
                                        </button>
                                        {openDropdownId === project.id && (
                                            <div className="absolute z-10 bg-white divide-y divide-gray-100 translate-x-[-50px] rounded-md shadow w-32 ">
                                                <ul className="py-2 text-sm text-gray-700">
                                                    <li>
                                                        <button

                                                            className="px-4 py-2 w-full hover:bg-main_color/10 hover:text-main_color flex items-center gap-1"
                                                        >
                                                            <IoEyeOutline />
                                                            View
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button

                                                            className="flex px-4 py-2 w-full hover:bg-main_color/10 hover:text-main_color items-center gap-1"
                                                        >
                                                            <LuPencilLine />
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => handleDelete(project.id)}

                                                            className="flex px-4 py-2 w-full hover:bg-main_color/10 hover:text-main_color items-center gap-1"
                                                        >
                                                            <FaRegTrashAlt />
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}
