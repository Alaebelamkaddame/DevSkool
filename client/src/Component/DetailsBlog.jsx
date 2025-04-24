import React from 'react'
import studentImage from '../assets/student.png';

function DetailsBlog() {
  return (
    <div className="sm:container mx-auto px-6 py-10">
        {/* Header Section */}
        <h1 className="font-extrabold sm:text-6xl text-4xl sm:px-20">Blog title</h1>
        <p className="mt-3 sm:px-20">Morgane Itshak Levy - 21 mars 2024 - 15 min de lecture</p>

        <div className="sm:px-20">
            <div className="flex justify-center">
            <img
                 src={studentImage}
                alt="image"
                className="rounded-b-m py-5 my-5 w-[600px] h-auto"
            />
            </div>

            <p className="font-bold text-gray-600 pt-5 pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit, minus veniam,
                consectetur aliquid facilis delectus culpa error aperiam iste voluptas voluptates eligendi nesciunt consequuntur,
                veritatis exercitationem voluptatum cupiditate ad?
            </p>
            <p className="font-bold text-gray-600 pt-2 pb-7"> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat autem enim cum nemo quas. Fugit, eveniet blanditiis? Nobis, aliquam! Dicta rerum temporibus ab pariatur, voluptates velit beatae sit optio voluptatum.
                Deserunt exercitationem quidem cum hic voluptas deleniti est, qui laboriosam a voluptatum, ullam consequatur, accusantium reiciendis quia repellat. Officia labore amet ratione ex, impedit et qui magni? Dolor, culpa architecto?
                Voluptatem necessitatibus, enim unde dolor possimus soluta est minus exercitationem sapiente tempora voluptates provident blanditiis ducimus placeat consequatur, hic odio! Fugiat neque temporibus tempora eaque architecto quia sapiente repudiandae beatae.
                Voluptas expedita mollitia obcaecati nam itaque tempora excepturi quae corrupti hic? Quibusdam impedit odit quo iste. Ipsam delectus veniam quasi odio rerum sapiente molestiae illo quae reiciendis, officiis eum beatae.
                <p className="font-bold text-gray-600 pt-5 pb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit, minus veniam,
                consectetur aliquid facilis delectus culpa error aperiam iste voluptas voluptates eligendi nesciunt consequuntur,
                veritatis exercitationem voluptatum cupiditate ad?
            </p>
            </p>
        </div>
        {/* Content Section */}
        <h1 className="font-extrabold text-3xl sm:px-20">1- first paragraph</h1>
        <p className="font-bold text-gray-600 pt-5 pb-7 sm:px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit, minus veniam,
            consectetur aliquid facilis delectus culpa error aperiam iste voluptas voluptates eligendi nesciunt consequuntur,
            veritatis exercitationem voluptatum cupiditate ad?
        </p>
        <p className="font-bold text-gray-600 pt-2 sm:px-20"> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat autem enim cum nemo quas. Fugit, eveniet blanditiis? Nobis, aliquam! Dicta rerum temporibus ab pariatur, voluptates velit beatae sit optio voluptatum.
            Deserunt exercitationem quidem cum hic voluptas deleniti est, qui laboriosam a voluptatum, ullam consequatur, accusantium reiciendis quia repellat. Officia labore amet ratione ex, impedit et qui magni? Dolor, culpa architecto?
            Voluptatem necessitatibus, enim unde dolor possimus soluta est minus exercitationem sapiente tempora voluptates provident blanditiis ducimus placeat consequatur, hic odio! Fugiat neque temporibus tempora eaque architecto quia sapiente repudiandae beatae.
            Voluptas expedita mollitia obcaecati nam itaque tempora excepturi quae corrupti hic? Quibusdam impedit odit quo iste. Ipsam delectus veniam quasi odio rerum sapiente molestiae illo quae reiciendis, officiis eum beatae.
        <p className="font-bold text-gray-600 pt-5 pb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit, minus veniam,
            consectetur aliquid facilis delectus culpa error aperiam iste voluptas voluptates eligendi nesciunt consequuntur,
            veritatis exercitationem voluptatum cupiditate ad?
        </p>
        </p>
    </div>
  )
}

export default DetailsBlog