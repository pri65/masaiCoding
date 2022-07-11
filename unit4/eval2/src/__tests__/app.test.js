import React from "react";
import { render, fireEvent, waitFor, screen, cleanup, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import data from "../utils/data.json";
import Users from "../Components/users/Users";
import userEvent from '@testing-library/user-event'

/**
 * DO NOT CHANGE ANYTHING HERE
 */
jest.setTimeout(60000);
beforeEach(()=>{
  cleanup()
})
test("loads elements correctly", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(<Users />);
  const loading = getByTestId("loading-indicator");
  expect(loading).toHaveTextContent("...loading")
    const orderElem = getByTestId("order-filter")
    const perPageElem = getByTestId("per-page-filter")
    const card = await findAllByTestId("user-card");
    const button = await findAllByTestId("button");
    debug(button)
    expect(card.length).toBe(10)
    expect(button.length).toBe(10)
    expect(orderElem.checked).toBe(true)
    expect(Number(perPageElem.value)).toBe(10)
});
test("on load, are the users correctly ordered", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(<Users />);

  const {data} = await fakeFetch({page:1, limit:10, orderBy: "asc"})
    const orderElem = getByTestId("order-filter")
    const card = await findAllByTestId("user-card");
    expect(card.length).toBe(10)

    data.forEach((item,index)=>{
      const elem = card[index];
      const img = elem.getElementsByTagName("img")[0]
      expect(elem).toHaveTextContent(item.name)
      expect(img.src).toBe(item.avatar)
    })

});
test("when clicking on descending it should work correctly", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(<Users />);

  const {data} = await fakeFetch({page:1, limit:10, orderBy: "asc"})
  const orderElem = getByTestId("order-filter")
  const card = await findAllByTestId("user-card");
    {
      expect(card.length).toBe(10)
      data.forEach((item,index)=>{
        const elem = card[index];
        const img = elem.getElementsByTagName("img")[0]
        expect(elem).toHaveTextContent(item.name)
        expect(img.src).toBe(item.avatar)
      })
    }
    {
      act(()=>{
        fireEvent.click(orderElem)
        expect(orderElem.checked).toBe(false)
      })
      const {data} = await fakeFetch({page:1, limit:10, orderBy: "desc"})
      await sleep(1500)
      const card = await findAllByTestId("user-card");
      expect(card.length).toBe(10)

      data.forEach((item,index)=>{
        const elem = card[index];
        const img = elem.getElementsByTagName("img")[0]
        expect(elem).toHaveTextContent(item.name)
        expect(img.src).toBe(item.avatar)
      })
    }

});
test("when changing per page filter it should work correctly", async () => {
  const { debug, getByTestId, getByRole, findAllByTestId } = render(<Users />);

  const {data} = await fakeFetch({page:1, limit:10, orderBy: "asc"})
  const perPageElem = getByTestId("per-page-filter")
  expect(Number(perPageElem.value)).toBe(10)
  const card = await findAllByTestId("user-card");
    {
      expect(card.length).toBe(10)
      data.forEach((item,index)=>{
        const elem = card[index];
        const img = elem.getElementsByTagName("img")[0]
        expect(elem).toHaveTextContent(item.name)
        expect(img.src).toBe(item.avatar)
      })
    }
    {
      act(()=>{
        fireEvent.change(perPageElem,{ target: { value: "20" } })
        expect(Number(perPageElem.value)).toBe(20)
      })
      const {data} = await fakeFetch({page:1, limit:20, orderBy: "asc"})
      await sleep(1500)
      const card = await findAllByTestId("user-card");
      expect(card.length).toBe(20)

      data.forEach((item,index)=>{
        const elem = card[index];
        const img = elem.getElementsByTagName("img")[0]
        expect(elem).toHaveTextContent(item.name)
        expect(img.src).toBe(item.avatar)
      })
    }

});
test("page, limit, and asc desc should work correctly", async () => {
  const { debug, getByTestId, getByRole, findAllByTestId } = render(<Users />);
  const orderElem = getByTestId("order-filter")
  const {data} = await fakeFetch({page:1, limit:10, orderBy: "asc"})
  const perPageElem = getByTestId("per-page-filter");
  
  expect(Number(perPageElem.value)).toBe(10)
  const card = await findAllByTestId("user-card");
    {
      expect(card.length).toBe(10)
      data.forEach((item,index)=>{
        const elem = card[index];
        const img = elem.getElementsByTagName("img")[0]
        expect(elem).toHaveTextContent(item.name)
        expect(img.src).toBe(item.avatar)
      })
    }
    {
      const button = await findAllByTestId("button");
      act(()=>{
        fireEvent.click(button[2]) // page 3
        fireEvent.click(orderElem) // desc
        fireEvent.change(perPageElem,{ target: { value: "20" } })
        expect(Number(perPageElem.value)).toBe(20)
      })
      const {data} = await fakeFetch({page: 3, limit:20, orderBy: "desc"})
      await sleep(1500)
      const card = await findAllByTestId("user-card");
      expect(card.length).toBe(20)

      data.forEach((item,index)=>{
        const elem = card[index];
        const img = elem.getElementsByTagName("img")[0]
        expect(elem).toHaveTextContent(item.name)
        expect(img.src).toBe(item.avatar)
      })
    }
    {
      act(()=>{
        fireEvent.click(orderElem) // asc
      })
      const {data} = await fakeFetch({page: 3, limit:20, orderBy: "asc"})
      await sleep(1500)
      const card = await findAllByTestId("user-card");
      expect(card.length).toBe(20)

      data.forEach((item,index)=>{
        const elem = card[index];
        const img = elem.getElementsByTagName("img")[0]
        expect(elem).toHaveTextContent(item.name)
        expect(img.src).toBe(item.avatar)
      })
    }

});


// DO_NOT_CHANGE
function fakeFetch({ page = 1, limit = 5, orderBy = "asc" }) {
  return new Promise((res, rej) => {
    try {
      if (
        typeof limit !== "number" ||
        typeof page !== "number" ||
        !["asc", "desc", "ASC", "DESC"].includes(orderBy)
      ) {
        console.log(typeof limit, typeof page);
        throw new Error(
          "page,limit needs to be number, orderBy needs to be asc or desc"
        );
      }
      if (orderBy.toLowerCase() === "asc") {
        data.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
      } else if (orderBy.toLowerCase() === "desc") {
        data.sort((a, b) => (b.name < a.name ? -1 : b.name > a.name ? 1 : 0));
      }
      const start = (page - 1) * limit;
      const end = page * limit;
      const total = Math.ceil(data.length / limit);
      setTimeout(() => {
        res({
          data: data.filter((_, i) => i >= start && i < end),
          totalPages: total
        });
      }, 1000);
    } catch (err) {
      return rej(err);
    }
  });
}

function sleep(delay) {
  return new Promise((res)=>setTimeout(res,delay))
} 