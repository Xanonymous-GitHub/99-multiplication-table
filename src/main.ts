import "./style.css";
import logo from "/chalkboard.png";
import { generateMultiplicationTable } from "./table.ts";

document.querySelector<HTMLDivElement>("#app")!.insertAdjacentHTML(
  "beforeend",
  `
    <div>
      <img src="${logo}" class="logo" alt="Vite logo" />
      <h1>Multiplication Table</h1>
      <div class="card">
        <code class="read-the-docs">
          <pre>${generateMultiplicationTable(9)}</pre>
        </code>
      </div>
    </div>
  `,
);
