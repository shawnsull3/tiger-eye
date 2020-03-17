/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Carousel.scss';
import ProductCard from '../ProductCard/ProductCard';
import data from '../../dummyData';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      currentCard: 0,
    };
    this.next = this.next.bind(this);
  }

  next(direction) {
    let changeTo = this.state.currentCard;
    const maxx = this.state.data.length;

    if (direction === 'left') {
      changeTo -= 1;
      if (changeTo < 0) {
        changeTo = (maxx - 4);
      }
    }
    if (direction === 'right') {
      changeTo += 1;
      if (changeTo + 3 >= maxx) {
        changeTo = 0;
      }
    }
    this.setState({ currentCard: changeTo });
  }

  render() {
    return (
      <div className="row carousel-main">
        <div className="col-xs-1 col-sm-1 carousel-arrow" direction="left" pointer="&#9654;" onClick={() => this.next('left')}><div>&#9664;</div></div>
        <div className="col-sm-4 card-group">
          <div className="row">
            <ProductCard className="col-sm-3 carousel-card" data={data[this.state.currentCard]} isRelated={this.props.isRelated} />
            <ProductCard className="col-sm-3 carousel-card" data={data[this.state.currentCard + 1]} isRelated={this.props.isRelated} />
            <ProductCard className="col-sm-3 carousel-card" data={data[this.state.currentCard + 2]} isRelated={this.props.isRelated} />
            <ProductCard className="col-sm-3 carousel-card" data={data[this.state.currentCard + 3]} isRelated={this.props.isRelated} />
          </div>
        </div>
        <div className="col-xs-1 col-sm-1 carousel-arrow" direction="right" pointer="&#9664;" onClick={() => this.next('right')}>&#9654;</div>
      </div>
    );
  }
}

export default Carousel;
