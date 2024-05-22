import React, { useContext, useEffect } from 'react'
import Context from '../../useContext/Context'

const Popup = () => {


    const {showMessage, setShowMessage,setError,error, msg, setMsg} = useContext(Context)

    useEffect(() => {
        if (showMessage) {
          const timeoutId = setTimeout(() => {
            setShowMessage(false);
            setError('');
            setMsg('');
          }, 3000);
    
          return () => clearTimeout(timeoutId);
        }
      }, [showMessage]);
  return (
    <div>
            {showMessage && (
          <div
            data-aos="fade-left"
            className={` text-sm absolute right-0 top-0 mb-32 z-50 lg:absolute lg:right-0 lg:top-0 mt-10 mr-10 bg-white p-5 shadow-2xl border-b-4 ${error ? 'border-red-500' : 'border-green-500'}`}
          >
            <span>{error || msg}</span>
          </div>
        )}
    </div>
  )
}

export default Popup
