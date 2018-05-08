import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import { withStyles, WithStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

interface TextProps {
  id: string;
  required?: boolean;
  label: string;
  error?: any;
  value?: any;
  autoComplete?: string;
  fieldProps?: any;

  onChange?: (newVal: string) => void;
  onKeyDown?: (key: number, value: string) => void;
}

class TextControl extends React.Component<TextProps & WithStyles<'formControl'>, {}> {

  private handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value.trim());
    }
  }
  private handleKeydown(e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e.which, (e.target as any).value.trim());
    }
  }

  public render() {
    const { id, label, required, error, value, autoComplete, classes, fieldProps } = this.props;

    return (
      <FormControl required={required} className={classes.formControl} error={error && error[id] ? true : false} aria-describedby={id + '-text'}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input multiline rows='4' id={id} onChange={e => this.handleChange(e)} type='text' autoComplete={autoComplete} value={value || ''} onKeyDown={(e) => this.handleKeydown(e)} {...fieldProps}/>
        {error && error[id] ? error[id].map((e, key) => (<FormHelperText key={key} id={id + '-' + key + '-text'}>{e}</FormHelperText>)) : undefined}
      </FormControl>
    );
  }
}

const styles = theme => ({
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
});

export default withStyles(styles)<TextProps>(TextControl);
