import { useState } from "react";

export default function AddCourseForm() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    thumbnailUrl: "",
    price: "",
    discountPrice: "",
    language: "",
    level: "",
    category: "",
    subCategory: "",
    instructorId: "",
    isPublished: false,
    tags: "",
    requirements: "",
    learningOutcomes: "",
    chapters: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChapterChange = (index, key, value) => {
    const updatedChapters = [...formData.chapters];
    updatedChapters[index][key] = value;
    setFormData({ ...formData, chapters: updatedChapters });
  };

  const handleLessonChange = (chapterIndex, lessonIndex, key, value) => {
    const updatedChapters = [...formData.chapters];
    updatedChapters[chapterIndex].lessons[lessonIndex][key] = value;
    setFormData({ ...formData, chapters: updatedChapters });
  };

  const addChapter = () => {
    setFormData({
      ...formData,
      chapters: [...formData.chapters, { title: "", order: formData.chapters.length + 1, lessons: [] }],
    });
  };

  const removeChapter = (index) => {
    const updatedChapters = [...formData.chapters];
    updatedChapters.splice(index, 1);
    setFormData({ ...formData, chapters: updatedChapters });
  };

  const addLesson = (chapterIndex) => {
    const updatedChapters = [...formData.chapters];
    updatedChapters[chapterIndex].lessons.push({ title: "", duration: "", videoUrl: "", isPreview: false });
    setFormData({ ...formData, chapters: updatedChapters });
  };

  const removeLesson = (chapterIndex, lessonIndex) => {
    const updatedChapters = [...formData.chapters];
    updatedChapters[chapterIndex].lessons.splice(lessonIndex, 1);
    setFormData({ ...formData, chapters: updatedChapters });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-orange-600">Add New Course</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="title" placeholder="Course Title" value={formData.title} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="thumbnailUrl" placeholder="Thumbnail URL" value={formData.thumbnailUrl} onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="discountPrice" placeholder="Discount Price" value={formData.discountPrice} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="language" placeholder="Language" value={formData.language} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="level" placeholder="Level" value={formData.level} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="subCategory" placeholder="Subcategory" value={formData.subCategory} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="instructorId" placeholder="Instructor ID" value={formData.instructorId} onChange={handleChange} className="p-2 border rounded" />
      </div>

      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows={4}></textarea>
      <textarea name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="w-full p-2 border rounded" rows={2}></textarea>
      <textarea name="requirements" placeholder="Requirements (comma separated)" value={formData.requirements} onChange={handleChange} className="w-full p-2 border rounded" rows={2}></textarea>
      <textarea name="learningOutcomes" placeholder="Learning Outcomes (comma separated)" value={formData.learningOutcomes} onChange={handleChange} className="w-full p-2 border rounded" rows={2}></textarea>

      <div className="flex items-center space-x-2">
        <input type="checkbox" name="isPublished" checked={formData.isPublished} onChange={handleChange} className="w-4 h-4 text-orange-600" />
        <label className="text-orange-600">Published</label>
      </div>

      {/* Chapters and Lessons */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-orange-600">Chapters & Lessons</h3>
        {formData.chapters.map((chapter, cIndex) => (
          <div key={cIndex} className="p-4 border rounded space-y-4">
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Chapter Title" value={chapter.title} onChange={(e) => handleChapterChange(cIndex, 'title', e.target.value)} className="w-full p-2 border rounded" />
              <button type="button" onClick={() => removeChapter(cIndex)} className="ml-2 bg-red-500 hover:bg-red-400 text-white px-4 py-1 rounded">Remove</button>
            </div>
            {chapter.lessons.map((lesson, lIndex) => (
              <div key={lIndex} className="space-y-2">
                <input type="text" placeholder="Lesson Title" value={lesson.title} onChange={(e) => handleLessonChange(cIndex, lIndex, 'title', e.target.value)} className="w-full p-2 border rounded" />
                <input type="text" placeholder="Duration (e.g. 5:30)" value={lesson.duration} onChange={(e) => handleLessonChange(cIndex, lIndex, 'duration', e.target.value)} className="w-full p-2 border rounded" />
                <input type="text" placeholder="Video URL" value={lesson.videoUrl} onChange={(e) => handleLessonChange(cIndex, lIndex, 'videoUrl', e.target.value)} className="w-full p-2 border rounded" />
                <label className="flex items-center space-x-2">
                  <input type="checkbox" checked={lesson.isPreview} onChange={(e) => handleLessonChange(cIndex, lIndex, 'isPreview', e.target.checked)} />
                  <span className="text-sm text-orange-600">Preview Lesson</span>
                </label>
                <button type="button" onClick={() => removeLesson(cIndex, lIndex)} className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded">Remove Lesson</button>
              </div>
            ))}
            <button type="button" onClick={() => addLesson(cIndex)} className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-1 rounded">Add Lesson</button>
          </div>
        ))}
        <button type="button" onClick={addChapter} className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-2xl">Add Chapter</button>
      </div>

      <button type="submit" className="bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 rounded-2xl shadow">
        Save Course
      </button>
    </form>
  );
}