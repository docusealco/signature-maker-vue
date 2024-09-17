<p align="center">
  <a href="https://www.docuseal.co/online-signature" target="_blank">
    <img width="600" height="356" src='https://github.com/user-attachments/assets/305904a9-291f-416d-ac32-baaf22970450' alt='Signature Maker'>
  </a>
</p>

# Signature Maker Vue

Signature Maker is a Vue component that lets users draw or type their signature.

#### Other implementations

- [Vanilla JS](https://github.com/docusealco/signature-maker-js)
- [React](https://github.com/docusealco/signature-maker-react)

## Demo

Try the live demo [here](https://www.docuseal.co/online-signature)

## Documentation

Check out the full documentation [here](https://www.docuseal.co/docs/embedded/signature#vue).

## Installation

```bash
npm install @docuseal/signature-maker-vue
```

OR

```bash
yarn add @docuseal/signature-maker-vue
```

## Usage

Basic Usage with standard styles and default signature saving behavior:

```vue
<template>
  <SignatureMaker :download-on-save="true" />
</template>

<script>
import { SignatureMaker } from '@docuseal/signature-maker-vue'

export default {
  name: 'App',
  components: {
    SignatureMaker
  }
}
</script>
```

---

Usage with default styles but custom signature saving behavior, such as uploading the signature to a server:

```vue
<template>
  <div class="app">
    <SignatureMaker @save="handleSave" />
  </div>
</template>

<script>
import { SignatureMaker } from '@docuseal/signature-maker-vue';

export default {
  name: 'App',
  components: {
    SignatureMaker,
  },
  methods: {
    handleSave(event) {
      fetch('/save-signature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file: event.base64 }),
      });
    },
  },
};
</script>
```

---

Usage without a save signature button, embedded in another form. The signature will be stored in a form field named `signature`:

```vue
<template>
  <div class="app">
    <form @submit.prevent="handleSubmit">
      <input v-model="name" name="name" type="text" />
      <SignatureMaker
        v-model="signatureBase64"
        :with-submit="false"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { SignatureMaker } from '@docuseal/signature-maker-vue';

export default {
  name: 'App',
  components: {
    SignatureMaker,
  },
  data() {
    return {
      name: '',
      signatureBase64: null,
    };
  },
  methods: {
    handleSubmit() {
      fetch('/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          signature: this.signatureBase64,
        }),
      });
    },
  },
};
</script>
```

---

Usage without a save signature button and tracking each signature change:

```vue
<template>
  <div class="app">
    <SignatureMaker
      :with-submit="false"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { SignatureMaker } from '@docuseal/signature-maker-vue';

export default {
  name: 'App',
  components: {
    SignatureMaker,
  },
  methods: {
    handleChange(event) {
      if (event.base64) {
        fetch('/background-save-signature', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ file: event.base64 }),
        });
      } else {
        console.log('No signature to save');
      }
    },
  },
};
</script>
```
---

Usage with custom button labels and classes (DaisyUI):

```vue
<template>
  <div class="app">
    <SignatureMaker
      class="block my-8"
      save-button-text="Télécharger"
      undo-button-text="Annuler"
      clear-button-text="Clair"
      draw-type-button-text="Dessiner"
      text-type-button-text="Type"
      upload-type-button-text="Télécharger"
      text-input-placeholder="Tapez votre signature ici"
      type-buttons-container-class="flex gap-2 mb-4 justify-center"
      draw-type-button-class="flex items-center justify-center py-3 w-40 uppercase border-neutral-focus space-x-2 border rounded-3xl cursor-pointer hover:bg-neutral hover:text-white hover:font-semibold"
      draw-type-button-active-class="bg-neutral text-white font-semibold"
      text-type-button-class="flex items-center justify-center py-3 w-40 uppercase border-neutral-focus space-x-2 border rounded-3xl cursor-pointer hover:bg-neutral hover:text-white hover:font-semibold"
      text-type-button-active-class="bg-neutral text-white font-semibold"
      upload-type-button-class="flex items-center justify-center py-3 w-40 uppercase border-neutral-focus space-x-2 border rounded-3xl cursor-pointer hover:bg-neutral hover:text-white hover:font-semibold"
      upload-type-button-active-class="bg-neutral text-white font-semibold"
      text-input-class="input mb-4 input-bordered bg-white text-2xl w-full h-14 rounded-2xl"
      canvas-class="bg-white border border-base-300 rounded-2xl w-full"
      undo-button-class="btn btn-outline btn-sm font-medium"
      clear-button-class="btn btn-outline btn-sm font-medium"
      save-button-class="btn btn-neutral text-white text-base w-full"
    />
  </div>
</template>

<script>
import { SignatureMaker } from '@docuseal/signature-maker-vue';

export default {
  name: 'App',
  components: {
    SignatureMaker,
  },
};
</script>
```

---

Usage with customization of certain elements using CSS classes and styles:

```vue
<template>
  <div class="app">
    <SignatureMaker
      save-button-class="btn btn-neutral text-white text-base w-full"
      canvas-class="bg-white border border-base-300 rounded-2xl w-full"
      canvas-style="border: 2px solid #000;"
    />
  </div>
</template>

<script>
import { SignatureMaker } from '@docuseal/signature-maker-vue';

export default {
  name: 'App',
  components: {
    SignatureMaker,
  },
};
</script>

```

## Customization

Signature Maker can be customized with the following attributes:

```
:download-on-save
:with-typed
:with-drawn
:with-upload
:with-color-select
:with-submit
:save-button-text
:control-buttons-container-class
:control-buttons-container-style
:save-button-class
:save-button-style
:save-button-disabled-class
:save-button-disabled-style
:undo-button-text
:undo-button-class
:undo-button-style
:clear-button-text
:clear-button-class
:clear-button-style
:text-input-placeholder
:text-input-class
:text-input-style
:canvas-class
:canvas-style
:type-buttons-container-class
:type-buttons-container-style
:draw-type-button-text
:draw-type-button-class
:draw-type-button-style
:draw-type-button-active-class
:draw-type-button-active-style
:text-type-button-text
:text-type-button-class
:text-type-button-style
:text-type-button-active-class
:text-type-button-active-style
:upload-type-button-text
:upload-type-button-class
:upload-type-button-style
:upload-type-button-active-class
:upload-type-button-active-style
:font-url
@save
@change
````

The full documentation with detailed configuration and event descriptions can be found [here](https://www.docuseal.co/docs/embedded/signature#vue).

# License

MIT
