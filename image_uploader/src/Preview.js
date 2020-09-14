import React, { useEffect, useState } from 'react'
import axios from 'axios';

function copyText(element) {
    var range, selection, worked;
  
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      console.log(range);
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();        
      range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    try {
      document.execCommand('copy');
      alert('text copied');
    }
    catch (err) {
      alert('unable to copy text');
    }
  }


const Preview = () => {
    const [image, setImage] = useState('');
    useEffect(()=>{
        // cache-control을 따로 지정안하면 서버에서 아예 request가 왔다는 로그가 안 찍힌다
        // axios에서 이미지는 이렇게 처리하는건가?
        const getImage = async () => {
            let img = await axios.get('http://localhost:8000/img',{
                responseType: 'arraybuffer',
                headers:{'Cache-Control':'no-cache'}
            });
            setImage(Buffer.from(img.data, 'binary').toString('base64'));
        }
        getImage();
    }, [])
    return (
        <div>
            upload success 
            <img className="upload-img" src={`data:image;base64,${image}`}/>
            <span onClick={()=>copyText(document.querySelector('.sample'))} className="sample">yoloworld</span>
        </div>
    )
}

export default Preview
