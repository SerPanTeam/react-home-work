import HeaderComponetnt from "./components/HeaderComponent";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import ListsComponent from "./components/ListsComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponetnt/>
      <ImageComponent/>
      <VideoComponent/>
      <ParagraphsComponent title="ParagraphsComponent 1" text="Создать новый компонент, назовите его ParagraphsComponent,"/>
      <ParagraphsComponent title="ParagraphsComponent 2" text="пусть он возвращает несколько параграфов текста с заголовками"/>
      <ListsComponent title="неупорядоченный" type="ul"/>
      <ListsComponent title="упорядоченный" type="ol"/>
    </div>
  );
}

export default App;


/* 
Создать новый компонент, назовите его VideoComponent, он должен возвращать видео.
Создать новый компонент, назовите его ParagraphsComponent, пусть он возвращает несколько параграфов текста с заголовками.
Создать новый компонент, назовите его ListsComponent, сделайте так, 
чтобы он возвращал два списка: упорядоченный и неупорядоченный. 
Каждый список должен содержать хотя бы один вложенный в него элемент.
 */