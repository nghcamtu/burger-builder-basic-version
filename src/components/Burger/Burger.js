import React from 'react';
import BurgerCSS from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger=(props_para)=>{
    // keys() là 1 method của object, trả về tất cả các property (còn gọi là key) của object mà nó đếm được (dưới dạng mảng)
        //vidu: person={ firstName: "John", lastName : "Doe",}
        //tra ve: firstName,lastName
    let transformedIngredients= Object.keys(props_para.ingredients)
    .map( igKey=>{ //duyệt qua từng cái salad, cheese, meat, ứng với mỗi cái là 1 mảng
        console.log('igKey nè: ',igKey);
        return [...Array(props_para.ingredients[igKey])].map((_, index)=>{ //tức là push mấy cái trên vào mảng, còn map(value, index, array) để duyệt mảng, mà ta hiện ko quan tâm value của nó, nên dùng underscore để để trống, ta chỉ quan tâm index thôi để lấy số lượng
            console.log('props_para.ingredients[igKey] nè: ', props_para.ingredients[igKey]);
            return <BurgerIngredient key={igKey +index } type={igKey} />
            //nó trả về vd là lần đầu của mảng meat là meat1, xong nó duyệt hết mảng meat thì sẽ có meat1+1= meat2 
            //vd: salad 1, meat2, cheese3
            //mỗi lần render xong 1 cái thì nó chạy map tiếp, cái key trên để cho react nó hiểu thôi, chứ cũng chả hiện
            //quan trọng là key với map(), mỗi lần nó map là nó render 1 lần
        });
        
    })
    .reduce((total, value)=>{
        console.log('total nè:', total);
        console.log('value nè:', value);
        return total.concat(value);
    }, []);
    console.log('transformedIngredients nè:', transformedIngredients);
    
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please start adding ingredients!!</p>
    }
    return (
    <div className={BurgerCSS.Burger}>
        <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
    );
};
export default burger;