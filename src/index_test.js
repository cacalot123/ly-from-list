import React, {Component} from 'react';
import {Col, DatePicker, Form, Modal, Select} from 'antd';
import {formItemLayoutGrid, formLayout} from './hoc/formListGrid';
import ReactDOM from 'react-dom';
import wrapWithUsername from './index_entey';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;
const modalError = Modal.error;
const modalConfirm = Modal.confirm;

const {RangePicker} = DatePicker;

@wrapWithUsername
class FormList extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (<div><Col span={formLayout.grid}>
        <FormItem {...formItemLayoutGrid} label={'退款状态'}>
          {getFieldDecorator('refundStatus', {
            initialValue: ''
          })(
            <Select className="select-form">
              <Option value="">全部</Option>
              <Option value="refund_success">退款成功</Option>
              <Option value="refund_fail">退款失败</Option>
              <Option value="refund_process">退款中</Option>
            </Select>
          )}
        </FormItem>
      </Col>
      </div>
    )
  }
}

const WrappedAdvancedSubmitForm = Form.create()(FormList);


ReactDOM.render((<WrappedAdvancedSubmitForm/>), document.getElementById('root'));
