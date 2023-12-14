import React, { useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import './joditCss.css'
import axios from 'axios'
import Toast from '../Toast/Toast';
import LoaderButton from '../Loaders/LoaderButton';
export default function Createblog() {
  const editor = useRef(null);
  const [picture, setPicture] = useState('')
  const [content, setContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('')
  const [category, setCategory] = useState('')

  const [serverResponse, setServerResponse] = useState({
    isLogging: false,
    serverData: {}
  });
  const BlogData=new FormData()






  const handleCreateBlog = async () => {
    if (blogTitle === '' || picture === '' || content === '' || category === '') {
      alert("Please Fill all the details")
    } else {
      setServerResponse(prevServerResponse => ({ ...prevServerResponse, isLogging: true }));

      const postData = {
        blogName: blogTitle,
        blogImage: picture,
        blogContent: content,
        blogCategory: category,
        blogCreationDate: new Date().toLocaleDateString()
      }
      // Post here
      BlogData.append('file',postData)
      try {
        // console.log(postData)
        const response = await axios.post('https://interesting-faithful-title.glitch.me/api/create', BlogData)

        if (response.status === 200) {
          setServerResponse(prevServerResponse => ({ ...prevServerResponse, serverData: response.data }));
          if (response.data.status === 200) {
            setBlogTitle('')
            setCategory("")
            setContent('')
            setPicture('')
            setServerResponse(prevServerResponse => ({ ...prevServerResponse, isLogging: false }));
          }
        } else {
          console.error('Received an unexpected response:', response);
        }
      }
      catch (err) { console.error(err) }
    }
  }
  async function uploadProfilePic(picture) {
    const data = new FormData();
    data.append("file", picture)
    data.append("upload_preset", "BlogUserProfile")
    await axios.post("https://api.cloudinary.com/v1_1/dedumcwij/image/upload", data)
      .then(res => {
        setPicture(res.data.secure_url)
        console.log("Image uploaded successfully!");
      }).catch(err => {
        console.error(err);

      })
  }
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Blog Content Here ...',

    }),
    []
  );
  return (
    <>

      <div className='main w-full from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br font-sans flex flex-col justify-center items-center'>
        <div className='w-full md:pt-2 md:pl-2'>
          <div className='md:text-2xl text-xl md:w-96  font-medium bg-white p-4 rounded-xl text-center md:text-left '>
            Create New Blog
          </div>
        </div>
        <div className='blogContent mb-2 md:w-[40rem] lg:w-[45rem] mt-2 lg:mt-4 lg:p-0 md:p-0 p-2 h-full'>
          <div className='titlePart h-[5rem] w-full flex items-center mb-6'>
            <input className='blogName w-full h-full text-4xl border-2 p-6 font-medium outline-2 outline-gray-200 text-black rounded-xl' placeholder='Blog Title....' value={blogTitle} onChange={(e) => (setBlogTitle(e.target.value))} />

          </div>
          <div className="w-full relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg mb-2">
            <div
              className="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300mb-2 ">
              <label className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" for="restaurantImage">

                Select image
                <input id="restaurantImage" className="text-sm cursor-pointer w-36 hidden" type="file" accept=".jpg, .jpeg, .png" onChange={(e) => { uploadProfilePic(e.target.files[0]) }} />
              </label>
              <button onClick={() => { setPicture('') }}
                className="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                remove image
              </button>
            </div>
            <div
              className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
              {picture === '' ?
                <span className="text-gray-400 opacity-75">
                  <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </span>
                :
                <img src={picture} alt='blog title' />
              }

            </div>
          </div>
          <select
            className='outline-none focus:outline-none w-full text-l p-2 rounded-xl mb-2'
            onChange={(e) => (setCategory(e.target.value))}
            value={category}
          >
            <option value='' defaultChecked >Select a Category</option>
            <option value='Web Development' >Web Development</option>
            <option value='Coding' >Coding</option>
            <option value='Lifestyle' >Lifestyle</option>
            <option value='Tech' >Tech</option>
            <option value='Coding' >Coding</option>

          </select>
          <div className='mb-2 blogPart w-full md:text-2xl text-l'>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1}
              allowResizeY={true}
              allowResizeX={true}
              onChange={newContent => setContent(newContent)}
            />
          </div>
          {serverResponse.isLogging ? <LoaderButton /> :
            <button className="rounded-md w-full py-3 text-lg font-semibold text-white shadow-sm bg-[#D05270] hover:bg-[#eb5d7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb5d7e]" onClick={handleCreateBlog}>
              Create Blog
            </button>}
        </div>

        {serverResponse.serverData.status ? <Toast msg={serverResponse.serverData.message} type={serverResponse.serverData.status === 200 ? true : false} /> : null}
      </div >

    </>
  )
}
