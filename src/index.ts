import { defineComponent, h } from 'vue'
import '@docuseal/signature-maker-js'

const SignatureMaker = defineComponent({
  name: 'SignatureMaker',
  props: {
    downloadOnSave: {
      type: Boolean,
      required: false,
      default: false,
    },
    withTyped: {
      type: Boolean,
      required: false,
      default: true,
    },
    withDrawn: {
      type: Boolean,
      required: false,
      default: true,
    },
    withUpload: {
      type: Boolean,
      required: false,
      default: true,
    },
    withColorSelect: {
      type: Boolean,
      required: false,
      default: true,
    },
    withSubmit: {
      type: Boolean,
      required: false,
      default: true,
    },
    controlButtonsContainerClass: {
      type: String,
      required: false,
      default: '',
    },
    controlButtonsContainerStyle: {
      type: String,
      required: false,
      default: '',
    },
    saveButtonText: {
      type: String,
      required: false,
      default: '',
    },
    saveButtonClass: {
      type: String,
      required: false,
      default: '',
    },
    saveButtonStyle: {
      type: String,
      required: false,
      default: '',
    },
    saveButtonDisabledClass: {
      type: String,
      required: false,
      default: '',
    },
    saveButtonsDisabledStyle: {
      type: String,
      required: false,
      default: '',
    },
    undoButtonText: {
      type: String,
      required: false,
      default: '',
    },
    undoButtonClass: {
      type: String,
      required: false,
      default: '',
    },
    undoButtonStyle: {
      type: String,
      required: false,
      default: '',
    },
    clearButtonText: {
      type: String,
      required: false,
      default: '',
    },
    clearButtonClass: {
      type: String,
      required: false,
      default: '',
    },
    clearButtonStyle: {
      type: String,
      required: false,
      default: '',
    },
    textInputPlaceholder: {
      type: String,
      required: false,
      default: '',
    },
    textInputClass: {
      type: String,
      required: false,
      default: '',
    },
    textInputStyle: {
      type: String,
      required: false,
      default: '',
    },
    canvasClass: {
      type: String,
      required: false,
      default: '',
    },
    canvasStyle: {
      type: String,
      required: false,
      default: '',
    },
    typeButtonsContainerClass: {
      type: String,
      required: false,
      default: '',
    },
    typeButtonsContainerStyle: {
      type: String,
      required: false,
      default: '',
    },
    drawTypeButtonText: {
      type: String,
      required: false,
      default: '',
    },
    drawTypeButtonClass: {
      type: String,
      required: false,
      default: '',
    },
    drawTypeButtonStyle: {
      type: String,
      required: false,
      default: '',
    },
    drawTypeButtonActiveClass: {
      type: String,
      required: false,
      default: '',
    },
    drawTypeButtonActiveStyle: {
      type: String,
      required: false,
      default: '',
    },
    textTypeButtonText: {
      type: String,
      required: false,
      default: '',
    },
    textTypeButtonClass: {
      type: String,
      required: false,
      default: '',
    },
    textTypeButtonStyle: {
      type: String,
      required: false,
      default: '',
    },
    textTypeButtonActiveClass: {
      type: String,
      required: false,
      default: '',
    },
    textTypeButtonActiveStyle: {
      type: String,
      required: false,
      default: '',
    },
    uploadTypeButtonText: {
      type: String,
      required: false,
      default: '',
    },
    uploadTypeButtonClass: {
      type: String,
      required: false,
      default: '',
    },
    uploadTypeButtonStyle: {
      type: String,
      required: false,
      default: '',
    },
    uploadTypeButtonActiveClass: {
      type: String,
      required: false,
      default: '',
    },
    uploadTypeButtonActiveStyle: {
      type: String,
      required: false,
      default: '',
    },

  },
  emits: ['save', 'change'],
  mounted() {
    this.$el.addEventListener('save', (e: CustomEvent) => {
      this.$emit('save', e.detail);
    });

    this.$el.addEventListener('change', (e: CustomEvent) => {
      this.$emit('change', e.detail);
    });
  },
  render() {
    return h('signature-maker', {
      'data-download-on-save': this.downloadOnSave,
      'data-with-typed': this.withTyped,
      'data-with-drawn': this.withDrawn,
      'data-with-upload': this.withUpload,
      'data-with-color-select': this.withColorSelect,
      'data-with-submit': this.withSubmit,
      'data-control-buttons-container-class': this.controlButtonsContainerClass,
      'data-control-buttons-container-style': this.controlButtonsContainerStyle,
      'data-save-button-text': this.saveButtonText,
      'data-save-button-class': this.saveButtonClass,
      'data-save-button-style': this.saveButtonStyle,
      'data-save-button-disabled-class': this.saveButtonDisabledClass,
      'data-save-buttons-disabled-style': this.saveButtonsDisabledStyle,
      'data-undo-button-text': this.undoButtonText,
      'data-undo-button-class': this.undoButtonClass,
      'data-undo-button-style': this.undoButtonStyle,
      'data-clear-button-text': this.clearButtonText,
      'data-clear-button-class': this.clearButtonClass,
      'data-clear-button-style': this.clearButtonStyle,
      'data-text-input-placeholder': this.textInputPlaceholder,
      'data-text-input-class': this.textInputClass,
      'data-text-input-style': this.textInputStyle,
      'data-canvas-class': this.canvasClass,
      'data-canvas-style': this.canvasStyle,
      'data-type-buttons-container-class': this.typeButtonsContainerClass,
      'data-type-buttons-container-style': this.typeButtonsContainerStyle,
      'data-draw-type-button-text': this.drawTypeButtonText,
      'data-draw-type-button-class': this.drawTypeButtonClass,
      'data-draw-type-button-style': this.drawTypeButtonStyle,
      'data-draw-type-button-active-class': this.drawTypeButtonActiveClass,
      'data-draw-type-button-active-style': this.drawTypeButtonActiveStyle,
      'data-text-type-button-text': this.textTypeButtonText,
      'data-text-type-button-class': this.textTypeButtonClass,
      'data-text-type-button-style': this.textTypeButtonStyle,
      'data-text-type-button-active-class': this.textTypeButtonActiveClass,
      'data-text-type-button-active-style': this.textTypeButtonActiveStyle,
      'data-upload-type-button-text': this.uploadTypeButtonText,
      'data-upload-type-button-class': this.uploadTypeButtonClass,
      'data-upload-type-button-style': this.uploadTypeButtonStyle,
      'data-upload-type-button-active-class': this.uploadTypeButtonActiveClass,
      'data-upload-type-button-active-style': this.uploadTypeButtonActiveStyle,
    });
  },
});

export { SignatureMaker };
