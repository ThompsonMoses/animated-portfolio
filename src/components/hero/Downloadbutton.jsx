import React from 'react'

const Downloadbutton = () => {
    const handleDownload = () =>{
        const link = document.createElement('a');
        link.href = '/Thompson Moses CV Resume.pdf';
        link.download = '/Thompson Moses CV Resume.pdf';
        link.click();
    }
  return (
    <button onClick={handleDownload}> Download CV</button>
  )
}

export default Downloadbutton