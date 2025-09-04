import "./App.css";

export default function App() {
  return (
    <main>
      <h1>Hello — React is running ✅</h1>
      <button className="test-nupp">Vajuta nuppu</button>
      <p className="sinine-tekst">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugiat.
      </p>
      <p className="roheline-tekst">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        consectetur totam accusamus sequi! Mollitia, consequatur.
      </p>
      <img
        src="https://plus.unsplash.com/premium_photo-1664303727151-4c345687204a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="motika-pilt"
      />

      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1a0uk9yl3GA?si=j4WSXUDJb2-rkEiu"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </main>
  );
}
