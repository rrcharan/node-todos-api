const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const  {Todo} = require('./../models/todo');

// seed test data
const todos = [{
    text: "first test todo"
}, {
    text : 'second test todo'
}];

// to insert test data
beforeEach((done)=> {
    Todo.remove({}).then(()=> {
        return Todo.insertMany(todos);
    }).then(()=> done());
});

// to remove test data

// beforeEach((done)=> {
//     Todo.remove({}).then(()=> done());
// });

describe('Post /Todos', ()=> {
    it('should create a new Todo', (done)=> {
        var text = 'Test todo text'

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=> {
            expect(res.body.text).toBe(text);
        })
        .end((err, res)=> {
            if(err) {
                return done(err)
            }

            // Todo.find().then((todos)=> {
                Todo.find({text}).then((todos)=> {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=> {
                done(e)
            });
        })

    });

    // 
    it('should not create a new Todo', (done)=> {
      
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res)=> {
            if(err) {
                return done(err)
            }

            Todo.find().then((todos)=> {
                // expect(todos.length).toBe(0);
                expect(todos.length).toBe(2);
                done();
            }).catch((e)=> {
                done(e)
            });
        })

    });
});

describe('get todos', () => {
    it('should get all todos', (done)=> {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=> {
            expect(res.body.todos.length).toBe(2)
        })
        .end(done);
    })
})