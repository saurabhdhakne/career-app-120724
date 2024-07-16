import React, { useState, useEffect, useRef } from 'react';

const EditorSection = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [content, setContent] = useState('Write Blog here, You Can also add images!!!');
  const editorRef = useRef();

  useEffect(() => {
    // Load the CKEditor script dynamically
    const script = document.createElement('script');
    script.src = './ckeditor/ckeditor.js'; // Update the path if necessary
    script.onload = () => {
      // Initialize CKEditor once the script is loaded
      window.CKEDITOR.replace(editorRef.current);
      window.CKEDITOR.instances.editor1.on('change', () => {
        setContent(window.CKEDITOR.instances.editor1.getData());
      });
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the CKEditor instance
      if (window.CKEDITOR.instances.editor1) {
        window.CKEDITOR.instances.editor1.destroy(true);
      }
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    const formData = new FormData();
    formData.append('title', title);
    formData.append('fileToUpload', file);
    formData.append('content', content);

    // fetch('blogCreateAdd', {
    //   method: 'POST',
    //   body: formData,
    // }).then(response => {
    //   // Handle the response
    // }).catch(error => {
    //   // Handle the error
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="col-12">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group p-2 col-md-4">
        <label className="form-label" htmlFor="fileToUpload">Select Image</label>
        <input
          type="file"
          className="form-control"
          name="fileToUpload"
          id="fileToUpload"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>

      <textarea
        name="content"
        id="editor1"
        rows="50"
        cols="80"
        ref={editorRef}
        defaultValue={content}
      />

      <div className="col-12 pt-5 text-center">
        <input type="submit" className="btn btn-primary btn-lg" value="Submit Blog" />
      </div>
    </form>
  );
};

export default EditorSection;
