import { useState } from "react";
import { useCreateProject } from "@/http/axiosFetcher";
import { CreateProjectFormProps } from "@/types/type";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    projectName: Yup.string().required("Project Name is required"),
    desc: Yup.string().required("Description is required"),
    assignedDate: Yup.date().required("Assigned Date is required").nullable(),
    dueDate: Yup.date().required("Due Date is required").nullable(),
    status: Yup.number().min(0).max(100).required("Status is required"),
    priority: Yup.string().oneOf(["Low", "Medium", "High"], "Invalid Priority").required("Priority is required"),
    totalTask: Yup.number().min(0).required("Total Tasks is required"),
    completedTask: Yup.number().min(0).required("Completed Tasks is required"),
});

export default function CreateProjectForm({ onClose }: CreateProjectFormProps) {
    const { trigger: createProject, error } = useCreateProject();

    const handleSubmit = async (values: any) => {
        try {
            await createProject({ body: values });
            console.log("Project created");
            onClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
                ×
            </button>
            <Formik
                initialValues={{
                    projectName: "",
                    desc: "",
                    assignedDate: "",
                    dueDate: "",
                    status: 0,
                    priority: "Low",
                    totalTask: 0,
                    completedTask: 0
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form className="p-4 bg-white shadow-md rounded">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Project Name</label>
                            <Field
                                type="text"
                                name="projectName"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            <ErrorMessage name="projectName" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <Field
                                as="textarea"
                                name="desc"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                rows={4}
                            />
                            <ErrorMessage name="desc" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Assigned Date</label>
                            <Field
                                type="date"
                                name="assignedDate"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            <ErrorMessage name="assignedDate" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Due Date</label>
                            <Field
                                type="date"
                                name="dueDate"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            <ErrorMessage name="dueDate" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Status</label>
                            <Field
                                type="number"
                                name="status"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                min="0"
                                max="100"
                            />
                            <ErrorMessage name="status" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Priority</label>
                            <Field
                                as="select"
                                name="priority"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </Field>
                            <ErrorMessage name="priority" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Total Tasks</label>
                            <Field
                                type="number"
                                name="totalTask"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                min="0"
                            />
                            <ErrorMessage name="totalTask" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Completed Tasks</label>
                            <Field
                                type="number"
                                name="completedTask"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                min="0"
                            />
                            <ErrorMessage name="completedTask" component="div" className="text-red-500" />
                        </div>
                        <button
                            type="submit"
                            className="bg-main_color hover:bg-main_color/85 text-white px-4 py-2 rounded-md"
                        >
                            Create Project
                        </button>
                        {error && <div className="text-red-500 mt-2">Failed to create project</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
}
