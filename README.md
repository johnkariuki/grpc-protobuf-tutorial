## Implementing Remote Procedure Calls With gRPC and Protocol Buffers


##Install
Clone the repository

``` bash
$ git clone git@github.com:andela-jkariuki/checkpoint-two-potato-orm.git
```

Install npm packages

``` bash
$ npm install
```

##Usage

Start the node server

```bash
node server/
```

Make an RPC call from one of the respective clients

- #### Node client

```bash
node client/node
```

- #### Python client

Create and use a new virtual environment

```bash
mkvirtualenv new_grpc_env && workon new_grpc_env
```

Install the grpc python modules from `requirements.txt`
```bash
pip install -r requirements.txt
```

Run the Python client

```bash
python client/python/client.py
```

## Contributing

Contributions are **welcome** and will be fully **credited**.

We accept contributions via Pull Requests on [Github](https://github.com/johnkariuki/grpc-protobuf-tutorial).

## Pull Requests


- **Document any change in behaviour** - Make sure the `README.md` and any other relevant documentation are kept up-to-date.

- **Create feature branches** - Don't ask us to pull from your master branch.

- **One pull request per feature** - If you want to do more than one thing, send multiple pull requests.

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please [squash them](http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages) before submitting.

## Security

If you discover any security related issues, please email me at [John Kariuki](johnkariukin@gmail.com) or create an issue.

## Credits

[John kariuki](https://github.com/johnkariuki)

## License

### The MIT License (MIT)

Copyright (c) 2016 John kariuki <johnkariukin@gmail.com>

> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
