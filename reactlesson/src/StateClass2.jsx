import React, { Component } from 'react'

//this  {}
export default class StateClass2 extends Component {
  //constructor
  constructor(props) {
    super(props)

    //bind
    this.informationMethod = this.informationMethod.bind(this)

    //state
    this.state = {
      adi: 'default adınızı giriniz',
      soyadi: 'default soyadınızı giriniz',
    }
  }

  //method
  informationMethod() {
    console.log('Eklendi')
    console.log(this)
    console.log(this.state.adi)
    console.log(this.state.soyadi)
    console.log('******************')

    //state
    // this.state.adi="Hamit";
    // console.log(this.state.adi)
    // this.state.soyadi="Mızrak";
    // console.log(this.state.soyadi)

    //setState
    this.setState({
      adi: 'Hamit',
      soyadi: 'Mızrak',
    })
    console.log(this.state.adi)
    console.log(this.state.soyadi)
  }

  //render
  render() {
    return (
      <div>
        <p>
          {this.state.adi} - {this.state.soyadi}
        </p>
        <button className="btn btn-warning" onClick={this.informationMethod}>
          Gönder
        </button>

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
