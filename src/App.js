import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css'; 

export default function App () {

  const initialState = `
  # Título
  
  ## Subtítulo
  
  Isso é um parágrafo **e isso é texto em negrito**  
  
  Isso é um [Link](https://codepen.io/tahaluh/pen/oNqwQPy)
  
  - Também temos listas
    - em diferentes níveis
    
  > Citações
  
  Código em linha:
  \`<div></div>\`
  
  Código em bloco:
  \`\`\`
    let a = 1;
    let b = 2;
    let c = a + b // 3
  \`\`\`
  
  E imagens:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  `
 
  const [editorText, setEditorText] = useState(initialState)
  const [markdown, setMarkdown] = useState(marked.parse(editorText, { breaks: true }))

  function handleChange (e) {
    setEditorText(e.target.value);
    setMarkdown(marked.parse(e.target.value, { breaks: true }));
  }

  console.log(markdown)

  return(
    <div class="container">
        <h1 className="text-center">Markdown Previewer</h1>
          <div className="col-8" id="editorDiv">
            <h2 className="text-center">Insira Aqui a "Marcação"</h2>
            <textarea className="form-control" id="editor" value={editorText} onChange={handleChange}/>
          </div>
          <div className="col-10" id="previewDiv">
            <h2 className="text-center">Aqui está o preview:</h2>
            <div id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
          </div>
      </div>
  );
}