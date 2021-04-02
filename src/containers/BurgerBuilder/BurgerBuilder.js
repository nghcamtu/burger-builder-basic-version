import React from 'react';
import { Component } from 'react';
import Auxiliary from './../../hoc/Auxiliary';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

//GLOBAL CONSTANTS- HẰNG SỐ VỚI GLOBAL SCOPE THÌ TA SẼ VIẾT HOA HẾT TẤT CẢ
const INGREDIENTS_PRICES = {
    salad: 5000,
    cheese: 10000,
    meat: 20000,
    bacon: 12000

}
class BurgerBuilder extends Component {
    //PROPERTIES:
    // constructor(props_para){
    //     super(props_para);
    //     this.state={...},
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 5000, //giá của cái bánh mì cóc,
        purchasable: false, //để xử lý nút ORDER NOW
        purchasing: false, //để xử lý show/hide modal
    }
    
    
    //METHODS:
    updatePurchaseState(ingredientsELe){
        // const ingredientsELe= {...this.state.ingredients};
        console.log("ingredientsEle của updatePurchaseState nè:", ingredientsELe);
        const sum= Object.keys(ingredientsELe)
        .map((igKey)=>{
            return ingredientsELe[igKey];
        })
        .reduce((sum, value)=>{
            return sum+ value;
        },0);
        this.setState( {purchasable: sum > 0 } );
    
    };
    
    
    addIngredientHanlder = (type) => {
        //tăng số lượng các nguyên liệu
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        //tính tiền dựa trên số lượng nguyên liệu
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        //lưu lại vào state
        this.setState(
            {
                // ingredients: updatedIngredients[type], sai nha
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });
        this.updatePurchaseState(updatedIngredients);
    };
    removeIngredientHandler = (type) => {
        //giảm số lượng các nguyên liệu
        const oldCount = this.state.ingredients[type];
        console.log('số lượng trước khi xóa phần tử của ingredient trên state: ',oldCount)
        if(oldCount<=0){
            return; //để nothing happen khi số lượng <0, để fix bug thôi
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        //giảm tiền dựa trên số lượng nguyên liệu bị giảm
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        //lưu lại vào state
        this.setState(
            {
                // ingredients: updatedIngredients[type], sai nha
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });
        this.updatePurchaseState(updatedIngredients);

    };
    
    purchaseHandler=()=>{
        this.setState({purchasing: true} );
    };
    

    purchaseCancelHandler=()=>{
        this.setState({purchasing: false} );
    };
    purchaseContinueHandler=()=>{
        alert("You continue!");
    };
    
    render() {
        const disabledInfo={
            ...this.state.ingredients
        };
        console.log('disabledInfo chứa ...this.state.ingredients là: ', disabledInfo);
    
        for(let key in disabledInfo){ //for...in sẽ duyệt qua các property của object, còn for..of là duyệt qua các value của mảng (array) và chuỗi (string)
            // console.log("key trong disabledInfo: ", key);
            // console.log("disabledInfo[key] là: ", disabledInfo[key]);
            
            disabledInfo[key]= disabledInfo[key]<=0 //return true, false
            //do disabledInfo[key]= disabledInfo.salad, (mà disabledInfo.salad là 0,1,2,3,4,5,6, tức là nó xuất ra value cũa property object)
            //kết quả trả về sẽ như là {salad: true, meat: false,....}
        }
    
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCanceled={this.purchaseCancelHandler} 
                    purchaseContinue= {this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                    />
                </Modal>
                {/* <div>Burger Layout</div> */}
                <Burger ingredients={this.state.ingredients} />
                {/* <div>Burger Controls</div> */}
                <BuildControls ingredientAdded={this.addIngredientHanlder} ingredientRemoved={this.removeIngredientHandler} 
                disabled={disabledInfo}
                price= {this.state.totalPrice}
                purchasable= {this.state.purchasable}
                ordered= {this.purchaseHandler}
                />
            </Auxiliary>
        );

    }
};

export default BurgerBuilder;



