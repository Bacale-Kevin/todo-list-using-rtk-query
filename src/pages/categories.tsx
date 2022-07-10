import React, { useState, useMemo, useEffect, useRef } from "react";
import { NextPage } from "next";
import MaterialReactTable from "material-react-table";
import { AddBox, Delete, Edit } from "@mui/icons-material";
import { Button, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

import SidebarLayout from "../components/layout";
import Modal from "../components/Modal/Modal";
import toast from "react-hot-toast";

import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../redux/services/categoryApi";

const categories: NextPage = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [name, setName] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { data, isLoading, error, isSuccess } = useGetCategoriesQuery();
  const [addCategory] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const {
    data: Data,
    isLoading: IsLoading,
    isSuccess: IsSuccess,
    isError: IsError,
  } = useGetCategoryQuery(router.query.id as string);
  const [updateCategory] = useUpdateCategoryMutation();

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Category Name",
      },
    ],
    []
  );

  //populate data into table
  let categoryList = [];

  data?.map((element) => {
    categoryList.push({
      id: element.id,
      name: element.name,
    });
  });

  //Handle submit both for POST and PUT request
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //UPDATE
    if (router.query.id) {
      setEditMode(true);
      try {
        const response = await updateCategory({
          id: router.query.id as string,
          name: updatedName,
        }).unwrap();
        router.push("/categories");
        toast.success("Record updated successfully");
        setShowModalUpdate(false);
      } catch (error) {
        toast.error(`Rejected ${error.data.message}`);
        console.log(error);
      }
    } else {
      //CREATE
      try {
        await addCategory(name).unwrap();
        if (isSuccess) {
          setShowModal(false);
          return toast.success("Record created successfully!");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  //Delete Category
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category ?")) {
      try {
        await deleteCategory(id).unwrap();
        return toast("Category deleted successfully!");
      } catch (error) {
        return toast.error(`${error.message}`);
      }
    }
  };

  //Update the name with the fetch data by id
  useEffect(() => {
    if (Data) {
      setUpdatedName(Data?.name);
    }
  }, [Data]);

  //Handle error during fetching single category
  useEffect(() => {
    if (IsError) {
      toast.error(`Something went wrong`);
    }
    setName(Data?.name);
  }, [IsError]);

  //Only set the edit mode to true when there is q query params
  useEffect(() => {
    if (router.query.id) {
      setEditMode(true);
    }
  }, [router.query.id]);


  return (
    <SidebarLayout>
      {isLoading ? (
        <div className="w-full h-full fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <MaterialReactTable
            columns={columns}
            data={categoryList.length && categoryList.reverse()}
            enableRowActions
            positionActionsColumn="last"
            renderToolbarTopCustomActions={(table) => {
              const handleCreateNewUser = () => {
                setShowModal(true);
              };

              return (
                <>
                  <div>
                    <Tooltip arrow title="Create New User">
                      <Button
                        variant="outlined"
                        color="secondary"
                        endIcon={<AddBox />}
                        onClick={handleCreateNewUser}
                      >
                        Create Category
                      </Button>
                    </Tooltip>
                  </div>
                </>
              );
            }}
            renderRowActions={({ row }) => (
              <div className="flex flex-nowrap gap-2">
                <Link href={`/categories?id=${row.original.id}`}>
                  <a>
                    <IconButton color="primary" onClick={() => setShowModalUpdate(true)}>
                      <Edit />
                    </IconButton>
                  </a>
                </Link>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => handleDelete(row.original.id)}
                >
                  <Delete />
                </IconButton>
              </div>
            )}
          />

          {/* Create Cetegory Modal */}
          <Modal open={showModal} close={() => setShowModal(false)}>
            <div className="text-xl mt-4 mb-8">Create A Category</div>

            <form className="grid gap-4 pb-14" onSubmit={handleSubmit}>
              <div className="grid gap-1">
                <label htmlFor="title">Name</label>
                <input
                  id="title"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name of category"
                  className="border rounded-md py-3 px-4 font-light text-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 rounded text-white py-3 mt-6 hover:bg-purple-500"
              >
                Save
              </button>
            </form>
          </Modal>

          {/* Update Category Modal */}
          <Modal open={showModalUpdate} close={() => setShowModalUpdate(false)}>
            <div className="text-xl mt-4 mb-8">Edit Category</div>

            <form className="grid gap-4 pb-14" onSubmit={handleSubmit}>
              <div className="grid gap-1">
                <label htmlFor="title">Name</label>
                <input
                  id="title"
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  placeholder="Enter name of category"
                  className="border rounded-md py-3 px-4 font-light text-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 rounded text-white py-3 mt-6 hover:bg-purple-500"
              >
                Update
              </button>
            </form>
          </Modal>
        </>
      )}
    </SidebarLayout>
  );
};

export default categories;
