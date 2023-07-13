import { render, screen } from '@testing-library/react';
import App from './App';

// =====================================GetByText========================================

//eger DOM-un icinde heqiqeten "Modern Testin" sozunun oldugundan eminikse, o zaman "get" istifade olunur.

it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByText('Modern Testing');
  expect(element).toBeInTheDocument();
});

it('should render button component', () => {
  render(<App />);
  const element = screen.getByText('Button');
  expect(element).toBeInTheDocument();
});

// =====================================GetByRole=========================================
//eger 2 dene eyni rol olarsa, onlari "name" ile secirik.

it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByRole('button', { name: 'Button1' });
  expect(element).toBeInTheDocument();
});

// =====================================GetByLabelText======================================
//"label" in icindeki "text"-e gore arama edir, ondan sonra o texte bagli "input" u bize test edir.
it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByLabelText('Mylabel');
  expect(element).toBeInTheDocument();
});

// =====================================GetByPlaceholderText=================================
//"placeholder" in icindeki "text"-e gore arama edir, ondan sonra o texte bagli "input" u bize test edir.
it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByPlaceholderText('Hallo');
  expect(element).toBeInTheDocument();
});

//=====================================GetByDisplayValue==================================
//Her hansi bir inputun icinde yazdigin "value" ishleyirmi deye test edir
it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByDisplayValue('Modern Testing');
  expect(element).toBeInTheDocument();
});

//=====================================GetByAltText==================================
//"Img"-nin icindeki "alt"-in textine gore test edir
it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByAltText('MyTest');
  expect(element).toBeInTheDocument();
});

//=====================================GetByTitle==================================
//"Title" atributna gore test edir("title" - "hover" ederken asagidan cixan yazidir )
it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByTitle('mytest');
  expect(element).toBeInTheDocument();
});

//=====================================GetByTestId==================================
//Burada istediyimiz elemente "data-testid" verib test etmeye cagira bilerik.
it('should render App component without crashing', () => {
  render(<App />);
  const element = screen.getByTestId('myTestId');
  expect(element).toBeInTheDocument();
});

//=====================================GetAllByRole==================================
//Arrayin icindeki elementlerin sayini test edir
it('should render App component without crashing', () => {
  const products = ['product1', 'product2', 'product3'];
  render(<App products={products} />);
  const elements = screen.getAllByRole('listitem');
  expect(elements.length).toBe(products.length);
});

//=====================================QueryByText==================================
//Her hansi bir elementin yoxulugunu test etmek ucun "query" istifade olunur
it('should render App component without crashing', () => {
  render(<App />);
  const elements = screen.queryByText('Suffix yoxdur');
  expect(elements).toBeInTheDocument();
});
