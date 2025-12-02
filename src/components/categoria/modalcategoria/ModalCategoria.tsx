import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormCategoria from '../formcategoria/FormCategoria';


function ModalCategoria() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded px-10 py-2 hover:bg-white hover:text-green-800'>
                       Nova Categoria

                    </button>

                    
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormCategoria />
            </Popup>
        </>
    );
}

export default ModalCategoria;
