import React from 'react';
import buildControlsCSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad', },
    { label: 'Bacon', type: 'bacon' }
];

// buildControls nhận vào các controls rồi duyệt mảng từng phần tử để render ra Control UI

const buildControls = (props_para) => {
    return (//đang là JSX giao diện
        <div className={buildControlsCSS.BuildControls}>
            <p>Current price: {props_para.price} <span>VND</span></p>
            { //chỗ này muốn xài code JS nên xài dấu ngoặc kép
                controls.map((value) => (
                    <BuildControl key={value.label} label={value.label} 
                        added={ ()=>props_para.ingredientAdded(value.type)} 
                        // type={props_para.type}
                        removed={()=>props_para.ingredientRemoved(value.type)}
                        disabled={props_para.disabled[value.type]} //ko truyền argument chỗ này là disable hết luôn
                        
                    /> 
                ))
            }
            <button className={buildControlsCSS.OrderButton}
            disabled={!props_para.purchasable}
            onClick={props_para.ordered}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;