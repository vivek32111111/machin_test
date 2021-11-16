import React from 'react'
import './Home.css'

export default class Dropdown extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      data: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat repudiandae distinctio culpa deserunt id veniam eveniet facere quo harum beatae iusto, at ut provident ullam velit natus eos minus Quos minima iusto corporis voluptatum quasi obcaecati explicabo consequatur aut officia molestiae unde aspernatur, vel perferendis quisquam, in placeat dolore at! Consequuntur accusamus molestiae quisquam, velit alias iure similique delectus.  Corrupti nihil quas sapiente, iusto magni repudiandae odio. Aspernatur nemo repudiandae at aliquam fugit, esse quod tenetur alias, accusantium odit ipsum doloribus minus dolor excepturi expedita, in quibusdam ducimus laborum  Voluptate voluptas suscipit sint similique impedit recusandae odit! Id officiis aliquid quia temporibus cumque saepe? Dicta laboriosam tempora ipsam optio veritatis atque reprehenderit sed repudiandae harum labore. Obcaecati, non aperiam Laborum expedita architecto illo natus ratione corporis, culpa esse nam officia possimus quasi repudiandae nisi vero laboriosam voluptas sit dolor iure rem veniam sapiente? Sint veniam laborum eligendi distinctio unde." , "consectetur adipisicing elit. Consequatur placeat repudiandae distinctio culpa deserunt id veniam eveniet facere quo harum beatae iusto, at ut provident ullam velit natus eos minus Quos minima iusto corporis voluptatum quasi obcaecati explicabo consequatur aut officia molestiae unde aspernatur, vel perferendis quisquam, in placeat dolore at! Consequuntur accusamus molestiae quisquam, velit alias iure similique delectus.  Corrupti nihil quas sapiente, iusto magni repudiandae odio. Aspernatur nemo repudiandae at aliquam fugit, esse quod tenetur alias, accusantium odit ipsum doloribus minus dolor excepturi expedita, in quibusdam ducimus laborum  Voluptate voluptas suscipit sint similique impedit recusandae odit! Id officiis aliquid quia temporibus cumque saepe? Dicta laboriosam tempora ipsam optio veritatis atque reprehenderit sed repudiandae harum labore. Obcaecati, non aperiam Laborum expedita architecto illo natus ratione corporis, culpa esse nam officia possimus quasi repudiandae nisi vero laboriosam voluptas sit dolor iure rem veniam sapiente? Sint veniam laborum"]
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <select className="Drop_down" onChange={this.handleDropdownChange}>
              <option value="">Droupdown</option>
              <option value={this.state.data[0]}>data1</option>
              <option value={this.state.data[1]}>data2</option>
              
            </select>
          </div>

          <div>  {this.state.selectValue}</div>
        </div>
      </div>
    );
  }
}

