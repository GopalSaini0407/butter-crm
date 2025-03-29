import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function HtmlEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [data,setData]=useState();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const getHtml = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    const result =JSON.stringify(rawContent, null, 2)
    console.log(JSON.stringify(rawContent, null, 2));
    setData(result);
  };

  return (
    <div>
        {data}
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      {/* <button onClick={getHtml}>Get HTML Content</button> */}
    </div>
  );
}

export default HtmlEditor;
