// Define the directory structure using a JavaScript object
const directoryStructure = [
    {
      name: 'src',
      type: 'folder',
      children: [
        {
          name: 'app',
          type: 'folder',
          children: [
            { name: 'app.component.ts', type: 'file' },
            { name: 'app.component.html', type: 'file' }
          ]
        },
        { name: 'index.html', type: 'file' }
      ]
    },
    {
      name: 'assets',
      type: 'folder',
      children: []
    },
    { name: 'angular.json', type: 'file' }
  ];
  
  // Function to generate HTML for the directory structure
  function generateDirectoryHTML(nodes) {
    const ul = document.createElement('ul');
    
    nodes.forEach(node => {
      const li = document.createElement('li');
      li.textContent = node.name;
  
      if (node.type === 'folder') {
        li.classList.add('folder');
        li.addEventListener('click', function (event) {
          event.stopPropagation(); // Prevent event bubbling
          li.classList.toggle('collapsed'); // Collapse/expand on click
        });
  
        if (node.children && node.children.length > 0) {
          const childUl = generateDirectoryHTML(node.children);
          li.appendChild(childUl);
        }
      } else if (node.type === 'file') {
        li.classList.add('file');
      }
  
      ul.appendChild(li);
    });
  
    return ul;
  }
  
  // Insert the generated HTML into the document
  const directoryList = document.getElementById('directoryList');
  const directoryHTML = generateDirectoryHTML(directoryStructure);
  directoryList.appendChild(directoryHTML);
  