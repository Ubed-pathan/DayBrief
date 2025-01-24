'use client'

import { useState, useRef } from "react";
import { imageUpload } from "@/app/api/actions/image-upload";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("file", image);
    }

    const response = await imageUpload(formData)

    if (response) {
      setTitle("");
      setDescription("");
      removeImage();
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-veryDarkBlue p-4">
      <div className="bg-veryLightBlue shadow-md rounded-lg border border-veryLightPurple w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-veryDarkBlue mb-6 text-center">Add New Blog</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-veryDarkBlue font-medium mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Enter Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-veryDarkBlue px-4 py-2 border border-veryDarkBlue rounded-lg text-veryLightPurple focus:outline-none focus:ring-2 focus:ring-veryLightPurple"
            />
          </div>
          <div>
            <label className="block text-veryDarkBlue font-medium mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
              placeholder="Enter Blog Description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-veryDarkBlue px-4 py-2 border border-veryDarkBlue rounded-lg text-veryLightPurple focus:outline-none focus:ring-2 focus:ring-veryLightPurple"
            />
          </div>
          <div>
            <label className="block text-veryDarkBlue font-medium mb-2" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-veryDarkBlue focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Selected Preview"
                  className="w-full h-auto rounded-lg border border-gray-300"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="text-red-500 hover:underline mt-2"
                >
                  Remove Image
                </button>
              </div>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {error && <div className="text-red-500 mt-4">{error}</div>}
        {submitted && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800">Blog Submitted Successfully!</h3>
            <p className="text-gray-700 mt-2"><strong>Title:</strong> {title}</p>
            <p className="text-gray-700 mt-2"><strong>Description:</strong> {description}</p>
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="w-full h-auto rounded-lg border border-gray-300"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
