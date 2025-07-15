import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import BlogList from '../Components/BlogList'

function Home() {
  // const [post,setPost]=useState([])
  //   const [orgPost,setOrgPost]=useState([])

  //   useEffect(()=>{
  //       getPost();
  //   },[])
  //   const getPost=()=>{
  //       GlobalApi.getPost.then(resp=>{
  //           const result=resp.data.data.map(item=>({
  //               id:item.id,
  //               blogsHeading:item.attributes.blogsHeading,
  //               blogcontent:item.attributes.blogcontent,
  //               tag:item.attributes.tag,
  //               coverImage:item.attributes.coverImage.data.attributes.url,
  //           }));
  //           setPost(result);
  //           setOrgPost(result);
  //       })
  //   }
  return (
    <div>
        <Header/>
        <Search/>
       {/* <IntroPost/> */}
       <BlogList/>
        {/*  <Blogs/>
        <Footer/> */}
    </div>
  )
}

export default Home