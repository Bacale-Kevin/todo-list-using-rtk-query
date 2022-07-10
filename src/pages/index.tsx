import { useCallback, useState } from "react";
import { NextPage } from "next";
import SidebarLayout from "../components/layout";
import {
  ViewListIcon,
  ViewGridAddIcon,
  DotsHorizontalIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import Modal from "../components/Modal/Modal";

const Home: NextPage = () => {
  const [toggleLayout, setToggleLayout] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleLayout = useCallback(() => setToggleLayout(!toggleLayout), [toggleLayout]);

  return (
    <SidebarLayout>
      <div
        className=" px-4 mx-3 mt-4 flex gap-2 justify-between cursor-pointer"
        onClick={handleToggleLayout}
      >
        {!toggleLayout ? (
          <div className="flex gap-2">
            <ViewListIcon className="w-6" />
            <div className="capitalize">List view</div>
          </div>
        ) : (
          <>
            <ViewGridAddIcon className="w-6" />
            <div className="capitalize">Grid view</div>
          </>
        )}

        <form className="">
          <input type="text" placeholder="search" className="border py-2 px-3 rounded-md w-60" />
        </form>
        <div
          className="border flex items-center bg-purple-600 px-6 rounded-lg hover:bg-purple-500 transition-all ease-in-out duration-300"
          onClick={() => setShowModal(true)}
        >
          <PlusIcon className="w-6 text-white" />
        </div>
      </div>

      <Modal open={showModal} close={() => setShowModal(false)}>
        <div className="text-xl mt-4 mb-8">Create A Todo</div>

        <form className="grid gap-4 pb-14">
          <div className="grid gap-1">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter task title"
              className="border rounded-md py-3 px-4 font-light text-sm"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="title">Priority</label>
            <select className="border rounded-md py-3 px-4 font-light text-sm opacity-60">
              <option selected className="">
                Select priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="grid gap-1">
            <label htmlFor="title">Categories</label>
            <select className="border rounded-md py-3 px-4 font-light text-sm opacity-60">
              <option selected className="">
                select category
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-purple-600 rounded text-white py-3 mt-6 hover:bg-purple-500"
          >
            Save
          </button>
        </form>
      </Modal>

      <div className="grid gap-5 grid-cols-12 px-6 mt-16">
        <div className="col-span-3 ">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Start Coding</h4>
            <div className="flex items-center gap-4">
              Priority:{" "}
              <span className="border rounded-full py-1 px-4 border-red-600 text-red-600">
                High
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Work</span>
            </div>
            <div className="flex gap-4 capitalize">
              <CheckCircleIcon className="w-6 text-green-600" />
              completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Buy Groceries</h4>
            <div className="flex items-center gap-4">
              Priority:
              <span className="border rounded-full py-1 px-4 border-yellow-400 text-yellow-400">
                Medium
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Work</span>
            </div>
            <div className="flex gap-4 capitalize">
              <XCircleIcon className="w-6 text-red-600" />
              not completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Start Coding</h4>
            <div className="flex items-center gap-4">
              Priority:{" "}
              <span className="border rounded-full py-1 px-4 border-red-600 text-red-600">
                High
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Work</span>
            </div>
            <div className="flex gap-4 capitalize">
              <CheckCircleIcon className="w-6 text-green-600" />
              completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Play Video Games</h4>
            <div className="flex items-center gap-4">
              Priority:{" "}
              <span className="border rounded-full py-1 px-4 border-teal-400 text-teal-400">
                Low
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Entertainment</span>
            </div>
            <div className="flex gap-4 capitalize">
              <XCircleIcon className="w-6 text-red-600" />
              Not completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3 ">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Start Coding</h4>
            <div className="flex items-center gap-4">
              Priority:{" "}
              <span className="border rounded-full py-1 px-4 border-red-600 text-red-600">
                High
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Work</span>
            </div>
            <div className="flex gap-4 capitalize">
              <CheckCircleIcon className="w-6 text-green-600" />
              completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Buy Groceries</h4>
            <div className="flex items-center gap-4">
              Priority:
              <span className="border rounded-full py-1 px-4 border-yellow-400 text-yellow-400">
                Medium
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Work</span>
            </div>
            <div className="flex gap-4 capitalize">
              <XCircleIcon className="w-6 text-red-600" />
              not completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Start Coding</h4>
            <div className="flex items-center gap-4">
              Priority:{" "}
              <span className="border rounded-full py-1 px-4 border-red-600 text-red-600">
                High
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Work</span>
            </div>
            <div className="flex gap-4 capitalize">
              <CheckCircleIcon className="w-6 text-green-600" />
              completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid gap-5 bg-white w-72 rounded-xl shadow-sm p-4">
            <div className="flex justify-end cursor-pointer">
              <DotsHorizontalIcon className="w-6" />
            </div>
            <h4 className="text-xl font-semibold border-b pb-3">Play Video Games</h4>
            <div className="flex items-center gap-4">
              Priority:{" "}
              <span className="border rounded-full py-1 px-4 border-teal-400 text-teal-400">
                Low
              </span>
            </div>
            <div className="flex items-center gap-4">
              Category: <span className="border rounded-full py-1 px-4">Entertainment</span>
            </div>
            <div className="flex gap-4 capitalize">
              <XCircleIcon className="w-6 text-red-600" />
              Not completed
            </div>
            <div className="flex gap-2 text-sm">
              <div>Date:</div> <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Home;
