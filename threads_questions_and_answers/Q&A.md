## Thread Pool in NodeJS

**Q: What is the thread pool in NodeJS?**

A: The thread pool is a set of threads that are managed by NodeJS to execute blocking I/O operations in the background, leaving the main thread to handle other tasks.

**Q: How many threads are there in the thread pool by default?**

A: The number of threads in the thread pool varies depending on the version of NodeJS and the underlying operating system. By default, the thread pool size is four in NodeJS v16.

**Q: How can we change the size of the thread pool in NodeJS?**

A: The size of the thread pool can be changed by setting the `UV_THREADPOOL_SIZE` environment variable to a different value. However, changing the thread pool size can have unintended consequences, and it is generally not recommended to do so.

**Q: What are the advantages of using the thread pool in NodeJS?**

A: Using the thread pool allows NodeJS to execute blocking I/O operations in the background without blocking the main thread. This can improve the overall performance and responsiveness of NodeJS applications.

**Q: Are all NodeJS applications suitable for using the thread pool?**

A: No, not all NodeJS applications are suitable for using the thread pool. Applications that rely heavily on CPU-bound operations may not benefit from using the thread pool and may actually see decreased performance.

**Q: Can we create our own threads in NodeJS?**

A: Yes, NodeJS provides the `worker_threads` module that allows us to create our own threads in a NodeJS application.

**Q: How can we communicate between threads in NodeJS?**

A: Threads in NodeJS can communicate with each other using message passing. The `worker_threads` module provides APIs for sending and receiving messages between threads.

**Q: Can we use the thread pool and worker threads together in a NodeJS application?**

A: Yes, it is possible to use both the thread pool and worker threads together in a NodeJS application. However, it requires careful planning and coordination to ensure that the threads do not interfere with each other.

**Q: Can we use the thread pool for javascript code or can only nodeJS functions use it?**

A: We can write custom JS that uses thread pool.

**Q: What functions in node std library use the thread pool?**

A: All `fs` module functions. Some crypto stuffs. Depends on OS (windows / UNIX based).

**Q: How does this thread pool stuff fit into the event loop?**

A: Tasks running in the thread pool are the 'pendingOperations' in our code example. (`__dir/eventloop/loop.js`)
