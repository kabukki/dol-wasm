# 💾 CHIP-8

A **CHIP-8** emulator written in Rust, compiled to WebAssemly, and consumed by React.

> CHIP-8 is an interpreted programming language, developed by Joseph Weisbecker. It was initially used on the COSMAC VIP and Telmac 1800 8-bit microcomputers in the mid-1970s. CHIP-8 programs are run on a CHIP-8 virtual machine. It was made to allow video games to be more easily programmed for these computers.

## Usage

Wrap your application in the `EmulatorProvider`, and consume it through the `EmulatorContext` context.

```jsx
import React, { useContext } from 'react';
import { render } from 'react-dom';
import { init, EmulatorProvider, useLifecycle, useIO } from '@kabukki/wasm-chip8';

export const App = () => {
    const { load } = useLifecycle();
    const { canvas } = useIO();

    const onChange = async (e) => {
        load(new Uint8Array(await e.target.files[0]?.arrayBuffer()));
        e.preventDefault();
    };

    return (
        <main>
            <input type="file" onChange={onChange} />
            <canvas ref={canvas} />
        </main>
    );
};

init().then(() => render(
    <EmulatorProvider>
        <App />
    </EmulatorProvider>,
    document.querySelector('#app'),
));
```

## Toolchain

The emulator is written in Rust and compiled into a WebAssembly module through [wasm-pack](https://github.com/rustwasm/wasm-pack) and uses [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) to ease interoperability with the JavaScript environment. An extra layer wraps the produced package for convenience when consuming it in React.

```
.rs ---[wasm-pack]---> .wasm + JS glue code <-- React
```

## Technical specifications

### ASI

All 35 opcodes are implemented.

### Known limitations

*TODO*

## Resources

### Chip-8 reference

- https://en.wikipedia.org/wiki/CHIP-8
- http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
- https://github.com/mattmikolay/chip-8/wiki/CHIP%E2%80%908-Technical-Reference
- https://archive.org/details/byte-magazine-1978-12/page/n109/mode/2up

### Tooling

- https://rustwasm.github.io/docs/wasm-bindgen/
- https://github.com/emscripten-core/emscripten/wiki/Porting-Examples-and-Demos
- https://jamesfriend.com.au/porting-pce-emulator-browser
- https://www.secondstate.io/articles/wasi-access-system-resources/

### Examples & tutorials

- https://github.com/letmaik/chip8
- https://github.com/ColinEberhardt/wasm-rust-chip8
- https://github.com/LucasHill/chip8-rust-wasm
- https://github.com/k0nserv/chip-8
- https://github.com/faizilham/chip8-rs
- https://github.com/alexalikiotis/rusty-chip8
- https://multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
- https://rustwasm.github.io/docs/book/
- http://emulator101.com/
- http://blog.alexanderdickson.com/javascript-chip-8-emulator

### ROMs

- https://github.com/loktar00/chip8/tree/master/roms
- https://github.com/corax89/chip8-test-rom
- https://github.com/badlogic/chip8/tree/master/roms
- https://johnearnest.github.io/chip8Archive/
