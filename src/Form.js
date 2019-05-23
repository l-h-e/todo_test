import React, {Component} from 'react';


class Form extends Component{
 /*   /*getInitialState: function () {
        // ネストされたオブジェクトを用意
        return {
            data: {
                name: '',
                email: ''
            }
        };
    },

    handleChange: function (event) {
        // ネストされたオブジェクトのdataまでアクセスしておく
        var data = this.state.data;

        // eventが発火したname属性名ごとに値を処理
        switch (event.target.name) {
            case 'name':
                data.name = event.target.value;
                break;
            case 'email':
                data.email = event.target.value;
                break;
        }

        // 状態を更新
        this.setState({
            data: data
        });
    },

    handleSubmit: function () {
        console.log(this.state.data.name);
        console.log(this.state.data.email);
    },
*/
    /*render: function () {
        return (
            <form action="javascript:void(0)" onSubmit={this.handleSubmit}>
                {/* Name }
                <label htmlFor="name">お名前</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                {/* Email }
                <label htmlFor="email">メールアドレス</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />

                 {/* Submit Button }
                <button type="submit">送信</button>
            </form>
        );
    }*/

/*ReactDOM.render(
    <FormApp />,
    document.getElementById('input-form')
;*/

	render(){
		return(
			<React.Fragment>
				<form action="javascript:void(0)" onSubmit={this.handleSubmit}>
	                <label htmlFor="name">お名前</label>
	                <input type="text" name="name" onChange={this.handleChange} />
	                <button type="submit">送信</button>
            	</form>
			</React.Fragment>

		);
	}

}

export default Form;