import * as React from 'react';
import {PureComponent} from 'react';

const camelPattern = /(^|[A-Z])[a-z]*/g;

export default class ControlPanel extends PureComponent {
  _formatSettingName(name) {
    return name.match(camelPattern).join(' ');
  }


  render() {
    const {settings} = this.props;

    return (
      <div className="control-panel">
        <h3>Details</h3>  
 
      </div>
    );
  }
}
