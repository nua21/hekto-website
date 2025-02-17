import React from 'react'
import B1 from "../assets/BlogImage1.png";
import B2 from "../assets/BlogImage2.png";
import B3 from "../assets/BlogImage3.png";
import ReuseBlog from './ReuseBlog';
import BlogPage2 from './BlogPage2';

const BlogPage = () => {
  return (
      <section className='pt-28'>
        <div className="container mx-auto">
          <div className="flex gap-14">
          <div className="w-[60%]">
            <ReuseBlog img={B1} pen="Surf Auxion" date="Aug 09 2020" more="Read More" dot="."  h="Mauris at orci non vulputate diam tincidunt nec." p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."/>
            <ReuseBlog img={B2} pen="Surf Auxion" date="Aug 09 2020" more="Read More" dot="."  h="Aenean vitae in aliquam ultrices lectus. Etiam." p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."/>
            <ReuseBlog img={B3} pen="Surf Auxion" date="Aug 09 2020" more="Read More" dot="."  h="Sit nam congue feugiat nisl, mauris amet nisi." p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."/>
          </div>
          <div className="w-[40%]">
            <BlogPage2/>
          </div>
          </div>
        </div>
      </section>
  )
}

export default BlogPage
