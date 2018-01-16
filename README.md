# ly-form-list

## function
#### getFields
- 初始化表单 返回 form子节点
- 调用 公用 grid 标准 <a href="#formItemLayoutGrid">formItemLayoutGrid</a> ,<a href="#formLayout">formLayout</a>
例如
```
 getFields() {
    const t = this;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = formItemLayoutGrid;
    const children = [];
    children.push(
      <Col span={formLayout.grid}>
        <FormItem {...formItemLayout} label={'交易申请日期'}>
          {getFieldDecorator('tradeBeginTimeInput', {
            initialValue: ''
          })(
            <RangePicker
              format="YYYY-MM-DD"
            />
          )}
        </FormItem>
      </Col>
    );
    children.push(
      <Col span={formLayout.grid}>
        <FormItem {...formItemLayout} label={'实际结算日期'}>
          {getFieldDecorator('actLiqDate')(
            <DatePicker showTime format="YYYY-MM-DD"/>
          )}
        </FormItem>
      </Col>
    );
    return children;
```
#### postChange
- 改变提交给后端的参数【可选】

例如
```
  postChange(values) {
    const val = Object.assign({}, values);
    if (val.liqDate) {
      val.liqDate = val.liqDate.format('YYYY-MM-DD');
    } else {
      val.liqDate = '';
    }
    return val;
  }
```

### grid object
- 根据ui标准设置的每个list 间距 和大小 等
#### <a name="formItemLayoutGrid">formItemLayoutGrid</a>
24 栅格  
label 占6格

form标签 占18格

屏幕宽度小于768 时候 占整行 24格
```
export const formItemLayoutGrid = {
     labelCol: {
       xs: {span: 24},
       sm: {
         span: 6
       }
     },
     wrapperCol: {
       xs: {span: 24},
       sm: {
         span: 18
       }
     }
   };
```
#### <a name="formLayout">formLayout</a>
一行3个 每个占8格 每个间距 为16
```
export const formLayout = {
  grid: 8,
  gutter: 16

};
```
### 0.0.27 支持sass
