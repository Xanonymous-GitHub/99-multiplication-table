import "./style.css";
import logo from "/chalkboard.png";
import { generateMultiplicationTable } from "./table.ts";

document.querySelector<HTMLDivElement>("#app")!.insertAdjacentHTML(
  "beforeend",
  `
    <div>
      <img src="${logo}" class="logo" alt="Vite logo" />
      <h1 class="_42dot-sans">Multiplication Table</h1>
      <div class="card">
        <code class="content-text _42dot-sans">
          <pre>${generateMultiplicationTable(9)}</pre>
        </code>
      </div>
    </div>
  `,
);
