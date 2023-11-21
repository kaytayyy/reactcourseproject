import React, { useState } from 'react';

const PostForm = () => {
    const [postContent, setPostContent] = useState('');

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: postContent,
                    // Add other fields as needed (e.g., images, tags)
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            const responseData = await response.json();
            console.log('Post created:', responseData);
            // Add logic to handle success (e.g., show a success message)
        } catch (error) {
            console.error('Error creating post:', error);
            // Add logic to handle errors (e.g., show an error message)
        }
    };

    return (
        <form onSubmit={handlePostSubmit}>
            <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What's on your mind?"
            />
            {/* Add input fields for images, tags, etc., as needed */}
            <button type="submit">Post</button>
        </form>
    );
};

export default PostForm;

// const AddPost = ({ onAddPost }) => {
//     const [postContent, setPostContent] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate post content
//         if (!postContent.trim()) {
//             return;
//         }

//         // Create a new post object
//         const newPost = {
//             content: postContent,
//             // Add other properties as needed (e.g., user ID, timestamp, etc.)
//         };

//         // Pass the new post to the parent component
//         onAddPost(newPost);

//         // Clear the input field
//         setPostContent('');
//     };

//     return (
//         <div>
//             <h2>Add a New Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     value={postContent}
//                     onChange={(e) => setPostContent(e.target.value)}
//                     placeholder="What's on your mind?"
//                 />
//                 <button type="submit">Post</button>
//             </form>
//         </div>
//     );
// };

// export default AddPost;