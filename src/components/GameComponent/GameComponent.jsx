import React, { Component } from 'react'
import './GameComponent.css'

export class GameComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         boxValue1 : '',
         boxValue2 : '',
         boxValue3 : '',
         boxValue4 : '',
         boxValue5 : '',
         boxValue6 : '',
         boxValue7 : '',
         boxValue8 : '',
         boxValue9 : '',
         hasPlayer1Turn:'Your Turn',
         hasPlayer2Turn:'',
         XorO : 'O',
        player1Values: [],
        player2Values: [],
        
      }
    }

    // checkWin = (value) =>{
    //     const doesWinOccur= [
    //         [1,2,3],
    //         [4,5,6],
    //         [7,8,9],
    //         [1,4,7],
    //         [2,5,8],
    //         [3,6,9],
    //         [1,5,9],
    //         [3,5,7],
    //     ]

    //     for(let i=0;i<8;i++)
    //     {
    //         if(value[0] === i[0] && value[1] === i[1] && value[2] === i[2])
    //         {

    //         }

    //     }
    // }

    divBoxHandler1 = () =>{
        this.setState({
            boxValue1 : this.state.XorO ===  'X' ? 'O' : 'X',
            // player1Values : this.state.boxValue1 ==='X'?[...this.state.player1Values,'1']: null,
            // player2Values : this.state.boxValue1 === 'O' ?[...this.state.player1Values,'1']: null,
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer2Turn === '' ? "Your Turn " : '',
            
        })
        // this.checkWin(this.state.player1Values,this.state.boxValue1)
        // this.checkWin(this.state.player2Values,this.state.boxValue1)
        console.log(this.state)
    }
    divBoxHandler2 = () =>{
        this.setState({
            boxValue2 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer2Turn === '' ? "Your Turn " : '',

        })
        console.log(this.state)
    }
    divBoxHandler3 = () =>{
        this.setState({
            boxValue3 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer2Turn === '' ? "Your Turn " : '',
        })
        console.log(this.state)
    }
    divBoxHandler4 = () =>{
        this.setState({
            boxValue4 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer2Turn === '' ? "Your Turn " : '',
        })
        console.log(this.state)
    }
    divBoxHandler5 = () =>{
        this.setState({
            boxValue5 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer2Turn === '' ? "Your Turn " : '',
        })
        console.log(this.state)
    }
    divBoxHandler6 = () =>{
        this.setState({
            boxValue6 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer2Turn === '' ? "Your Turn " : '',
        })
        console.log(this.state)
    }
    divBoxHandler7 = () =>{
        this.setState({
            boxValue7 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer2Turn === '' ? "Your Turn " : '',
        })
        console.log(this.state)
    }
    divBoxHandler8 = () =>{
        this.setState({
            boxValue8 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
        })
        console.log(this.state)
    }
    divBoxHandler9 = () =>{
        this.setState({
            boxValue9 : this.state.XorO ==='X' ? 'O' : 'X',
            XorO : this.state.XorO ==='X' ? 'O' : 'X',
            hasPlayer1Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
            hasPlayer2Turn: this.state.hasPlayer1Turn === '' ? "Your Turn " : '',
        })
        console.log(this.state)
    }


  render() {
    const {boxValue1,boxValue2,boxValue3,boxValue4,boxValue5,boxValue6,boxValue7,boxValue8,boxValue9, hasPlayer1Turn,hasPlayer2Turn} = this.state
    return (
      <React.Fragment>
        <div className='GameContainer'>
            <div className='Player1'>
               <h1 className='text-red-500' style={{textAlign:'center'}}> Player 1</h1>
               <p style={{textAlign:'center',font:'20px'}}>{hasPlayer1Turn}</p>
            </div>
            <div className='GameDiv' style={{textAlign:'center'}}>
                <h1>Tic Tac Toe</h1>
                <div className='boxContainer'>
                    <button className='box' value={this.state.boxValue1} onClick={this.divBoxHandler1}>{boxValue1}</button>
                    <button className='box' value={this.state.boxValue2} onClick={this.divBoxHandler2}>{boxValue2}</button>
                    <button className='box' value={this.state.boxValue3} onClick={this.divBoxHandler3}>{boxValue3}</button>
                    <button className='box' value={this.state.boxValue4} onClick={this.divBoxHandler4}>{boxValue4}</button>
                    <button className='box' value={this.state.boxValue5} onClick={this.divBoxHandler5}>{boxValue5}</button>
                    <button className='box' value={this.state.boxValue6} onClick={this.divBoxHandler6}>{boxValue6}</button>
                    <button className='box' value={this.state.boxValue7} onClick={this.divBoxHandler7}>{boxValue7}</button>
                    <button className='box' value={this.state.boxValue8} onClick={this.divBoxHandler8}>{boxValue8}</button>
                    <button className='box' value={this.state.boxValue9} onClick={this.divBoxHandler9}>{boxValue9}</button>
                </div>
            </div>
            <div className='Player2'>
                <h1 style={{textAlign:'center'}}>Player 2</h1>
                <p style={{textAlign:'center',font:'20px'}}>{hasPlayer2Turn}</p>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GameComponent