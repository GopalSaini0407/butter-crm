import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function HtmlEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const getHtml = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    console.log(JSON.stringify(rawContent, null, 2));
  };

  return (
    <div>
   {/* <h1>this is addTask</h1> */}
    </div>
  );
}

export default HtmlEditor;
