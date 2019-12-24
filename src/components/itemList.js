import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { zitemsRequest } from '../ducks/itemList';

class ItemList extends Component {
    static propTypes = {};

    /*constructor(){
        super();
        this.state = {
            items: [],
            hasErrored: false,
            isLoading: false,
        };
    }*/

    componentDidMount(){
        this.props.zitemsRequest();
        //this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        let items = [];
        if(this.props.hasErrored){
            return <p>Sorry! There was an error loading the items</p>;
        }

        if(this.props.isLoading){
            return <p>Loading...</p>
        }


        /*TODO Из саги прилетает промис в this.props.items. (?) не понимаю почему */
        /*{this.props.items.map((item)=>(
                  <li key={item.id}>
                      {item.label}
                  </li>
              ))}*/
        return (
            <ul>

            </ul>
        )
    }
    /*fetchData(url) {
        this.setState({ isLoading: true });

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                this.setState({ isLoading: false });

                return response;
            })
            .then((response) => response.json())
            .then((items) => this.setState({ items })) // ES6 property value shorthand for { items: items }
            .catch(() => this.setState({ hasErrored: true }));
    }*/
}


/*Но на самом деле, компонент не должен содержать в себе логику связанную
с получением данных и сами данные не должны храниться в состоянии компонента. Вот здесь то и приходит Redux.*/

const  mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};




export default connect (mapStateToProps, { zitemsRequest } )(ItemList)