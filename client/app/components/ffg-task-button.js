import Component from 'ember-component';
import observer from 'ember-metal/observer';
import computed, { reads } from 'ember-computed';
import { isBlank } from 'ember-utils';
import { invokeAction } from 'ember-invoke-action';

const FFgTaskButton = Component.extend({
  tagName: 'button',
  classNameBindings: ['isRunning:appear-disabled', 'isSuccessClass', 'isFailureClass'],
  attributeBindings: ['disabled', 'type', 'tabindex'],

  task: null,
  disabled: false,
  buttonText: 'Save',
  runningText: reads('buttonText'),
  successText: 'Saved',
  successClass: 'ffg-btn-green',
  failureText: 'Retry',
  failureClass: 'ffg-btn-red',

  isRunning: reads('task.last.isRunning'),

  isSuccess: computed('isRunning', 'task.last.value', function() {
    if (this.get('isRunning')) {
      return false;
    }

    const value = this.get('task.last.value');
    return !isBlank(value) && value !== false;
  }),

  isSuccessClass: computed('isSuccess', function() {
    if (this.get('isSuccess')) {
      return this.get('successClass');
    }
  }),

  isFailure: computed('isRunning', 'isSuccess', 'task.last.error', function() {
    if (this.get('isRunning') || this.get('isSuccess')) {
      return false;
    }

    return this.get('task.last.error') !== undefined;
  }),

  isFailureClass: computed('isFailure', function() {
    if (this.get('isFailure')) {
      return this.get('failureClass');
    }
  }),

  isIdle: computed('isRunning', 'isSuccess', 'isFailure', function() {
    return !this.get('isRunning') && !this.get('isSuccess') && !this.get('isFailure');
  }),

  click() {
    // do nothing if disabled externally
    if (this.get('disabled')) {
      return false;
    }

    const task = this.get('task');
    const taskName = this.get('task.name');
    const lastTaskName = this.get('task.last.task.name');

    // task-buttons are never disabled whilst running so that clicks when a
    // taskGroup is running don't get dropped BUT that means we need to check
    // here to avoid spamming actions from multiple clicks
    if (this.get('isRunning') && taskName === lastTaskName) {
      return;
    }

    invokeAction(this, 'action');
    task.perform();

    // prevent the click from bubbling and triggering form actions
    return false;
  },

  setSize: observer('isRunning', function() {
    if (this.get('isRunning')) {
      this.$().width(this.$().width());
      this.$().height(this.$().height());
    } else {
      this.$().width('');
      this.$().height('');
    }
  })
});

FFgTaskButton.reopenClass({
  positionalParams: ['buttonText']
});

export default FFgTaskButton;
