import React from 'react';

import closeButtonStyle from './closeButton.module.sass';

export default function CloseButton({onClick, className, ...props}) {
    return (
        <button onClick={onClick} 
            className={closeButtonStyle.closeButton + ' ' + className}
            type='button' {...props}
        >
            <img alt='close' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHWSURBVHhe7dFdSsRAFETh2ZU7U/RFl+wOtBstGEIyk/5Jcqv7fNDgwwi5p24AAAAAAAAAAADw9Zrey9+f1vIN+RYrn+n9pPednvMI+dvzDfmWfJMFxddzHeE+vl74EZbx9dxGWIuvF3aErfh6LiM8iq8XboT39NY+dPmij7Anvl6+OYySD486gv0NzgfYxxfHQ4aJL04HDRdfHA4bNr5EPnD4+BLx0GniS6SDp4svEQ6fNr5cGWD6+HJFCOIvnBmE+BvOCEP8J44MRPydjghF/EI9gxG/Uo9wxG/UEpD4ndSEJH5npUGJf4CSEfY84lfoNQLxG7SOQPwOakcgfkelIxC/Mwa4UGl8PUbooDa+HiM0aI2vxwgVesXXY4QCJfHz70p+ywhPlMbPv6/5H6xoCckIjXoEZIRKPcMxQqEjgjHCTkeGYoQnzgjECBvODMMIC1cEYYR/V4aYfoQIAaYdIdLh040Q8eBpRoh86PAjOBw47AhOhw03guNBw4zgfIj9CPYHJNY3fKS39qHLFzW+lIyQbw7lK721D9WLHl/2jJBvDWlrBJf48miEsPFlOYJbfFkbIXx80Qiu8eV+BJv48paec3zJN+RbAAAAAAAAAAAA4Od2+wWUHa6tpe6okgAAAABJRU5ErkJggg==' />
        </button>
    );
}
